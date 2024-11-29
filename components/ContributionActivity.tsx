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
import { useState } from "react";
import dayjs from "dayjs";

interface SkillData {
  name: string;
  contributions: {
    date: Date;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }[];
}

function generateContributions(maxCount: number): SkillData["contributions"] {
  const contributions = [];
  const startDate = new Date(new Date().getFullYear(), 0, 1);
  const endDate = new Date();

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const count = Math.floor(Math.random() * (maxCount / 365));
    contributions.push({
      date: new Date(d),
      count,
      level: getContributionLevel(count),
    });
  }

  return contributions;
}

function getContributionLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
}

const DAYS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function ContributionChart({ data }: { data: SkillData["contributions"] }) {
  const getContributionColor = (level: number) => {
    const colors: { [key in number]: string } = {
      0: "bg-slate-100 dark:bg-slate-700",
      1: "bg-green-200 dark:bg-green-900",
      2: "bg-green-300 dark:bg-green-800",
      3: "bg-green-400 dark:bg-green-700",
      4: "bg-green-500 dark:bg-green-600",
    };
    return colors[level] || colors[0];
  };

  const weeks = [];
  let currentWeek: { date: Date; count: number; level: 0 | 1 | 2 | 3 | 4 }[] =
    [];

  data.forEach((day, index) => {
    if (index % 7 === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return (
    <div className="flex gap-2 overflow-x-auto">
      <div className="flex flex-col justify-between text-sm text-zinc-500 dark:text-zinc-400">
        {DAYS.map((day, index) => (
          <div key={index} className="h-[10px] text-xs">
            {day}
          </div>
        ))}
      </div>
      <div className="flex-grow">
        <div className="flex gap-[3px]">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={cn(
                    "h-[10px] w-[10px] rounded-sm",
                    getContributionColor(day.level)
                  )}
                  title={`${
                    day.count
                  } contributions on ${dayjs(day.date).format("YYYY-MM-DD")}`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          {MONTHS.map((month) => (
            <div key={month}>{month}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContributionActivity() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const years = [selectedYear - 1, selectedYear];
  const skillsData: SkillData[] = [
    {
      name: "Frontend Development",
      contributions: generateContributions(200),
    },
    {
      name: "Backend Development",
      contributions: generateContributions(150),
    },
    {
      name: "DevOps",
      contributions: generateContributions(100),
    },
  ];
  return (
    <Card className="shadow-lg border-0 bg-white dark:bg-slate-700">
      <CardHeader>
        <CardTitle>Contribution Activity</CardTitle>
        <CardDescription>My coding activity over the past year</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-end space-x-2">
            {years.map((year) => (
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
          {skillsData.map((skill) => (
            <div key={skill.name}>
              <h4 className="text-md font-semibold mb-2">{skill.name}</h4>
              <ContributionChart data={skill.contributions} />
            </div>
          ))}
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
