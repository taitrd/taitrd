import { DAYS, MONTHS } from "@/lib/constants/contributions";
import { SkillData } from "@/lib/types";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useContributions from "@/hooks/use-contributions";
import { Skeleton } from "./ui/skeleton";

function ContributionChart({ data }: { data: SkillData["contributions"] }) {
  const { isLoading } = useContributions();
  const getContributionColor = (level: number) => {
    const colors: { [key in number]: string } = {
      0: "bg-slate-100 dark:bg-slate-600",
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
          {isLoading && <Skeleton className="h-[88px] w-full rounded-xl" />}
          {!isLoading && weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.map((day, dayIndex) => {
                const title = `${day.count} contributions on ${dayjs(
                  day.date
                ).format("YYYY-MM-DD")}`;
                return (
                  <TooltipProvider key={dayIndex}>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger>
                        <div
                          key={dayIndex}
                          className={cn(
                            "h-[10px] w-[10px] rounded-[3px] hover:bg-primary dark:hover:bg-primary ",
                            getContributionColor(day.level)
                          )}
                          title={title}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
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
export default ContributionChart;
