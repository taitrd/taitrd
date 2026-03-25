import { ContributionPlatformID } from "@/data/contributions/commands/get-contributions-by-platform";
import { Event, EventGroup } from "./github-api.type";

export type Contributions = {
  version: number;
  updated_at?: string;
  taitrd: string;
  status: "open" | "closed";
  events?: Event[];
  events_count: number;
  created_at: string;
  contributions: {
    grouped_events: EventGroup[];
    old_grouped_events?: EventGroup[];
    entry_events?: EventGroup[];
  };
};

export type PlatformContribution = {
  version: number;
  updated_at?: string;
  taitrd: ContributionPlatformID;
  status: "open" | "closed";
  created_at: string;
  grouped_events: { [dateid in string]: EventGroup };
  events_count: number;
};
