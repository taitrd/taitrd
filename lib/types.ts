import { Event, EventGroup } from "./types/github-api.type";
import { Contributions } from "./types/contribution.type";

export type ContributionData = {
  allEvents: Event[];
  groupedEvents: EventGroup[];
};

export type ServiceContributions = {
  github_contributions: Contributions;
  gitlab_contributions?: Contributions;
  bitbucket_contributions?: Contributions;
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
