"use server";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LockIcon from "@mui/icons-material/Lock";
import NoEncryptionIcon from "@mui/icons-material/NoEncryption";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { getLanguages, getNumCommits, getRepos } from "~/api/github";
import { Repository } from "~/types";

import ProjectsPagination from "./ProjectsPagination";

interface ProjectsProps {
  page: number;
}

export default async function Projects(props: ProjectsProps) {
  const repos = await getRepos({
    per_page: 15,
    page: props.page,
    sort: "updated",
  });

  const getPage = (search: "first" | "last") => {
    const links = (repos.link ?? "").split(",");
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

  const content = {
    first: getPage("first"),
    last: getPage("last"),
    repositories:
      (await Promise.all(
        repos.data.map(async (repo) => {
          const [languages, numberOfCommits] = await Promise.all([
            getLanguages(repo.owner.login, repo.name),
            getNumCommits(repo.owner.login, repo.name),
          ]);
          const languageList = Object.keys(languages);
          const newRepo: Repository = {
            ...repo,
            languages: languageList,
            num_of_commits: numberOfCommits,
          };
          return newRepo;
        })
      )) ?? [],
  };

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
            {content.repositories.map((repo) => (
              <TableRow key={repo.id}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    display: { xs: "none", sm: "table-cell" },
                  }}
                >
                  <Typography variant="h5">
                    {repo.updated_at?.substring(0, 4)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{repo.name}</Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    display: { xs: "none", sm: "none", md: "table-cell" },
                  }}
                >
                  {repo.language && (
                    <Chip color="primary" label={repo.language} />
                  )}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    display: { xs: "none", sm: "none", md: "table-cell" },
                  }}
                >
                  <Tooltip
                    title={repo.visibility === "public" ? "Public" : "Private"}
                  >
                    {repo.visibility === "public" ? (
                      <NoEncryptionIcon />
                    ) : (
                      <LockIcon />
                    )}
                  </Tooltip>
                </TableCell>
                <TableCell align="right">
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    href={`/projects/${repo.name}?owner=${repo.owner.login}`}
                  >
                    Learn more
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ProjectsPagination
        count={content.last}
        page={props.page}
        variant="outlined"
      />
    </Stack>
  );
}
