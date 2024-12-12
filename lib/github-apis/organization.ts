import octokitClient from "../octokit";

const OrganizationAPI = () => {
  const client = octokitClient();
  return {
    getUserOrganizations: async () => {
      const { data } = await client.request("GET /user/orgs", {
        headers: {},
      });
      return data;
    },
  };
};
export default OrganizationAPI;
