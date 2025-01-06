"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PropsWithChildren, useMemo, useState } from "react";
import useContributions from "@/hooks/use-contributions";
import { SkillData } from "@/lib/types";
import {
  entryContributionsMapping,
  gitHubContributionsMapping,
} from "@/lib/client/contributions";
import dayjs from "dayjs";
import siteMetadata from "@/data/siteMetadata";
import { Github, Gitlab } from "lucide-react";
import { Bitbucket } from "./social-icons/icons";
import { currentYear, yearRange } from "@/lib/constants/contributions";
import dynamic from 'next/dynamic';
const ContributionChart = dynamic(() => import("./ContributionChart"));

export default function ContributionActivity() {
  const { data: contributions_data } = useContributions();

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const skillsData: SkillData[] = useMemo(() => {
    const selectedStartDate = dayjs(`${selectedYear}-01-01`);
    const startDate = selectedStartDate.toDate();
    const endDate = selectedStartDate.endOf("year").toDate();
    const github: SkillData["contributions"] = gitHubContributionsMapping(
      selectedYear,
      startDate,
      endDate,
      contributions_data?.github_contributions
    );

    const gitlab: SkillData["contributions"] = entryContributionsMapping(
      selectedYear,
      startDate,
      endDate,
      contributions_data?.gitlab_contributions
    );

    const bitbucket: SkillData["contributions"] = entryContributionsMapping(
      selectedYear,
      startDate,
      endDate,
      contributions_data?.bitbucket_contributions
    );
    return [
      {
        name: "Github",
        link: siteMetadata.github,
        icon: Github,
        contributions: github,
      },
      {
        name: "Gitlab",
        icon: Gitlab,
        link: siteMetadata.gitlab,
        contributions: gitlab,
      },
      {
        name: "Bitbucket",
        icon: Bitbucket,
        contributions: bitbucket,
      },
    ];
  }, [
    contributions_data?.bitbucket_contributions,
    contributions_data?.github_contributions,
    contributions_data?.gitlab_contributions,
    selectedYear,
  ]);

  return (
    <Card className="shadow-lg border-0 bg-white dark:bg-slate-700">
      <div className="flex justify-between pr-6">
        <CardHeader>
          <CardTitle>Contribution Activity</CardTitle>
          <CardDescription>
            My coding activity over the past year
          </CardDescription>
        </CardHeader>
        <div className="flex items-center justify-between space-x-2">
          {yearRange.map((year) => (
            <Button
              key={year}
              variant={year === selectedYear ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </Button>
          ))}
        </div>
      </div>
      <CardContent>
        <div className="space-y-6">
          {skillsData.map((skill) => {
            const SkillLink = ({ children }: PropsWithChildren) =>
              skill.link ? (
                <a href={skill.link} target="_blank">
                  {children}
                </a>
              ) : (
                <>{children}</>
              );
            return (
              <h4 key={skill.name} className="text-md font-semibold mb-2 ">
                <Button
                  variant="link"
                  className={cn(
                    "flex items-center gap-2 justify-center px-1 ",
                    skill.link ? "" : "cursor-default hover:no-underline"
                  )}
                >
                  {skill.icon && <skill.icon />}
                  <SkillLink>{skill.name}</SkillLink>
                </Button>
                <ContributionChart data={skill.contributions} />
              </h4>
            );
          })}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={cn(
                "h-[10px] w-[10px] rounded-sm",
                level === 0
                  ? "bg-slate-100 dark:bg-slate-700"
                  : `bg-green-${(level + 1) * 100} dark:bg-green-${
                      1000 - level * 100
                    }`
              )}
            />
          ))}
          <span className="text-xs text-zinc-500 dark:text-zinc-400">More</span>
        </div>
      </CardContent>
    </Card>
  );
}
