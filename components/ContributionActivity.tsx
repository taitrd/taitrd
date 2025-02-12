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
import dynamic from "next/dynamic";
import { fadeInLeft } from "@/lib/motion/variants";
import { Skeleton } from "./ui/skeleton";

const MotionBlock = dynamic(() => import("./motions/Block"));
const ContributionChart = dynamic(() => import("./ContributionChart"), { ssr: false });

export default function ContributionActivity() {
  const { data: contributions_data, isLoading } = useContributions();

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
    ].filter(i => i.contributions.some(j => j.count));
  }, [
    contributions_data?.bitbucket_contributions,
    contributions_data?.github_contributions,
    contributions_data?.gitlab_contributions,
    selectedYear,
  ]);

  return (
    <MotionBlock variants={{
      ...fadeInLeft, animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 0.3,
        },
      }
    }} >
      <Card className="shadow-lg border-0 bg-white dark:bg-slate-700">
        <div className="flex flex-col sm:flex-row sm:justify-between pr-6">
          <CardHeader>
            <CardTitle>Contribution Activity</CardTitle>
            <CardDescription>
              My coding activity over the past year
            </CardDescription>
          </CardHeader>
          <div className="px-6 sm:px-0 flex items-center lg:justify-between space-x-2">
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
            {isLoading && <Skeleton className="h-[88px] w-full rounded-xl" />}
            {skillsData.map((skill, key) => {
              const SkillLink = ({ children }: PropsWithChildren) =>
                skill.link ? (
                  <a href={skill.link} target="_blank">
                    {children}
                  </a>
                ) : (
                  <>{children}</>
                );
              return (
                <div key={key}>
                  <SkillLink>
                    <Button
                      variant="link"
                      className={cn(
                        "flex items-center gap-2 justify-center px-1 ",
                        skill.link ? "" : "cursor-default hover:no-underline"
                      )}
                    >
                      {skill.icon && <skill.icon />}
                      {skill.name}
                    </Button>
                  </SkillLink>
                  <ContributionChart data={skill.contributions} />
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <span className="text-xs text-zinc-500 dark:text-zinc-300">Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={cn(
                  "h-[10px] w-[10px] rounded-sm",
                  level === 0
                    ? "bg-slate-100 dark:bg-slate-700"
                    : `bg-green-${(level + 1) * 100} dark:bg-green-${1000 - level * 100
                    }`
                )}
              />
            ))}
            <span className="text-xs text-zinc-500 dark:text-zinc-300">More</span>
          </div>
        </CardContent>
      </Card>
    </MotionBlock>
  );
}
