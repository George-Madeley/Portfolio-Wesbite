"use server";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LockIcon from "@mui/icons-material/Lock";
import NoEncryptionIcon from "@mui/icons-material/NoEncryption";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { components } from "@octokit/openapi-types";

import gitHubFetch from "~/api/github";
import { Repository, Result } from "~/types";

import ErrorFallback from "./ErrorFallback";
import ProjectsPagination from "./ProjectsPagination";

interface ProjectsProps {
  page: number;
}

export default async function Projects(props: ProjectsProps) {
  const repos = await gitHubFetch("GET /user/repos", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
    affiliation: "owner,organization_member",
    visibility: "all",
    per_page: 15,
    page: props.page,
    sort: "updated",
  });

  const getPage = (
    search: "first" | "last",
    link: components["headers"]["link"] | undefined
  ) => {
    const links = (link ?? "").split(",");
    const regex = new RegExp(`rel="${search}"`);
    const index = links.findIndex((link) => link.match(regex));
    if (index > -1) {
      const match = links[index].match(/&page=(\d+)/);
      if (match) {
        return parseInt(match[1], 10);
      }
    }
    // If this is the first page, the link header will not contain a "first"
    // link, so we can assume that the first page is 1. If this is the last
    // page, the link header will not contain a "last" link, so we can assume
    // that the last page is the current page.
    if (search === "first") {
      return 1;
    } else return props.page;
  };

  const content: Result<{
    first: number;
    last: number;
    repositories: Result<Repository>[];
  }> = repos.success
    ? {
        success: true,
        data: {
          first: getPage("first", repos.headers.link),
          last: getPage("last", repos.headers.link),
          repositories:
            (await Promise.all(
              repos.data.map(async (repo): Promise<Result<Repository>> => {
                const [languages, numberOfCommits] = await Promise.all([
                  gitHubFetch("GET /repos/{owner}/{repo}/languages", {
                    owner: repo.owner.login,
                    repo: repo.name,
                    headers: {
                      "X-GitHub-Api-Version": "2022-11-28",
                    },
                  }),
                  gitHubFetch("GET /repos/{owner}/{repo}/stats/contributors", {
                    owner: repo.owner.login,
                    repo: repo.name,
                    headers: {
                      "X-GitHub-Api-Version": "2022-11-28",
                    },
                  }),
                ]);

                if (!languages.success) return languages;
                if (!numberOfCommits.success) return numberOfCommits;

                const data: Repository = {
                  ...repo,
                  languages: Object.keys(languages),
                  num_of_commits: Array.isArray(numberOfCommits.data)
                    ? numberOfCommits.data.reduce(
                        (acc: number, curr) => acc + curr.total,
                        0
                      )
                    : (numberOfCommits.data.total ?? 0),
                };
                return {
                  success: true,
                  data,
                };
              })
            )) ?? [],
        },
      }
    : repos;

  return (
    <Stack alignItems="center" gap={3} sx={{ width: "100%" }}>
      <TableContainer>
        <Table aria-label="table of repositories">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  display: { xs: "none", sm: "table-cell" },
                }}
              >
                Year
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell
                align="right"
                sx={{
                  display: { xs: "none", sm: "none", md: "table-cell" },
                }}
              >
                Language
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  display: { xs: "none", sm: "none", md: "table-cell" },
                }}
              >
                Visibility
              </TableCell>
              <TableCell align="right">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content.success ? (
              content.data.repositories.map((repo, index) =>
                repo.success ? (
                  <TableRow key={repo.data.id}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        display: { xs: "none", sm: "table-cell" },
                      }}
                    >
                      <Typography variant="h5">
                        {repo.data.updated_at?.substring(0, 4)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h5">{repo.data.name}</Typography>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        display: { xs: "none", sm: "none", md: "table-cell" },
                      }}
                    >
                      {repo.data.language && (
                        <Chip color="primary" label={repo.data.language} />
                      )}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        display: { xs: "none", sm: "none", md: "table-cell" },
                      }}
                    >
                      <Tooltip
                        title={
                          repo.data.visibility === "public"
                            ? "Public"
                            : "Private"
                        }
                      >
                        {repo.data.visibility === "public" ? (
                          <NoEncryptionIcon />
                        ) : (
                          <LockIcon />
                        )}
                      </Tooltip>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        endIcon={<ArrowForwardIcon />}
                        href={`/projects/${repo.data.name}?owner=${repo.data.owner.login}`}
                        sx={{ display: { xs: "none", sm: "inline-flex" } }}
                      >
                        Learn more
                      </Button>
                      <IconButton
                        href={`/projects/${repo.data.name}?owner=${repo.data.owner.login}`}
                        sx={{ display: { xs: "inline-flex", sm: "none" } }}
                      >
                        <ArrowForwardIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow key={index}>
                    <TableCell colSpan={5}>
                      <ErrorFallback error={repo.error} />
                    </TableCell>
                  </TableRow>
                )
              )
            ) : (
              <ErrorFallback error={content.error} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {content.success && (
        <ProjectsPagination
          count={content.data.last}
          page={props.page}
          variant="outlined"
        />
      )}
    </Stack>
  );
}
