import "server-only";

import { Octokit } from "octokit";
import { serializeError } from "serialize-error";

import { Result } from "~/types/globals";

// Warn if GH_API_TOKEN is not set, as all GitHub API requests will fail without
// it
if (!process.env.GH_API_TOKEN)
  console.warn("GH_API_TOKEN is not set. GitHub API requests will fail.");

// Create a single Octokit instance to be used for all requests. This allows us to
// take advantage of connection pooling and other optimizations.
const octokit = new Octokit({
  auth: process.env.GH_API_TOKEN,
});

/**
 * The type of the route parameter for octokit.request. This is a string literal
 * type that represents the API route being requested, e.g.
 * `"GET /repos/{owner}/{repo}"`. By using this type, we can ensure that the
 * route parameter is valid and matches one of the expected API routes.
 */
type OctokitRoute = Parameters<typeof octokit.request>[0];

/**
 * The options type for octokit.request for a given route. This is used to
 * ensure that the options we pass to gitHubFetch are type-safe and match the
 * expected parameters for the given route.
 */
type OctokitOptions<Route extends OctokitRoute> = Parameters<
  typeof octokit.request<Route>
>[1];

/**
 * The response type from octokit.request for a given route. This is used to
 * extract the data, headers, and URL from the response in a type-safe way.
 */
type OctokitResponse<Route extends OctokitRoute> = Awaited<
  ReturnType<typeof octokit.request<Route>>
>;

/**
 * A wrapper around octokit.request that returns a Result type and handles
 * errors gracefully. This allows us to avoid try/catch blocks in our components
 * and centralizes error handling for GitHub API requests.
 * @param route - The API route to request, e.g. "GET /repos/{owner}/{repo}"
 * @param options - The options to pass to octokit.request
 * @returns A Result type containing the response data or an error. The success
 * case also includes the response headers and URL, which can be useful for
 * pagination and debugging.
 */
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
      error: serializeError(
        error instanceof Error
          ? error
          : new Error("Unknown error while making GitHub request")
      ),
    };
  }
}
