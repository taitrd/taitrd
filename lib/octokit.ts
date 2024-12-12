import { Octokit } from "octokit";
const octokitClient = () => {
  return new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
};
export default octokitClient;
