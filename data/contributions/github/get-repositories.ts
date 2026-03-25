import { unstable_cache } from "next/cache";
import { CacheTag } from "@/lib/enums/cach-tag";
import RepositoryAPI from "@/lib/github-apis/repositority";
export const getRepositories = unstable_cache(
  async () => {
    const { repos, orgRepos } = await RepositoryAPI().getListRepositories();
    const repoParams = [
      ...repos.map((i) => ({ user: i.owner.login, repo: i.name })),
      ...orgRepos.map((i) => ({ user: i.owner.login, repo: i.name })),
    ];
    return {
      repos,
      orgRepos,
      repoParams,
    };
  },
  ["github_list_repositories"],
  { revalidate: 86400, tags: [CacheTag.Github] },
);
