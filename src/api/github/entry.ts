import { Octokit } from "octokit";

if (!process.env.GH_API_TOKEN)
  console.warn("GH_API_TOKEN is not set. GitHub API requests will fail.");

const octokit = new Octokit({
  auth: process.env.GH_API_TOKEN,
});

export default octokit;
