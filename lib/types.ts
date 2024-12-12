import { Dayjs } from "dayjs";
import { Event, EventGroup } from "./types/github-api.type";
import { GithubContributions } from "./types/github-contribution.type";

export type ContributionData = {
  allEvents: Event[];
  groupedEvents: EventGroup[];
};

export type Contributions = {
  github_contributions: GithubContributions;
};

export interface SkillData {
  name: string;
  icon: any;
  link?: string;
  contributions: {
    date: Date;
    date_str?: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }[];
}
