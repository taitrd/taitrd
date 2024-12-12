import { getGithubContributions } from "@/data/contributions/github";

export const GET = async (req: Request) => {
  const github_contributions = await getGithubContributions();
  if (!github_contributions) {
    return Response.json(
      {
        message: "Not found contributions",
      },
      { status: 400 }
    );
  }
  return Response.json(
    {
      github_contributions,
    },
    { status: 200 }
  );
};
