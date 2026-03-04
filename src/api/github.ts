import { Octokit } from "octokit";

import { Result } from "~/types/globals";

if (!process.env.GH_API_TOKEN)
  console.warn("GH_API_TOKEN is not set. GitHub API requests will fail.");

const octokit = new Octokit({
  auth: process.env.GH_API_TOKEN,
});

type OctokitRoute = Parameters<typeof octokit.request>[0];
type OctokitOptions<Route extends OctokitRoute> = Parameters<
  typeof octokit.request<Route>
>[1];
type OctokitResponse<Route extends OctokitRoute> = Awaited<
  ReturnType<typeof octokit.request<Route>>
>;

export default async function gitHubFetch<Route extends OctokitRoute>(
  route: Route,
  options?: OctokitOptions<Route>
): Promise<
  Result<
    OctokitResponse<Route>["data"],
    {
      headers: OctokitResponse<Route>["headers"];
      url: OctokitResponse<Route>["url"];
    }
  >
> {
  try {
    const response = await octokit.request(route, options);

    return {
      success: true,
      data: response.data,
      headers: response.headers,
      url: response.url,
    };
  } catch (error: unknown) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error
          : new Error("Unknown error while making GitHub request"),
    };
  }
}
