import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GH_API_TOKEN,
});

export default octokit;
