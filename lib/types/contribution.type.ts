import { EventGroup } from "./github-api.type";

export type Contributions = {
  version: number;
  updated_at?: string;
  taitrd: string;
  status: "open" | "closed";
  events_count: number;
  created_at: string;
  contributions: {
    grouped_events: EventGroup[];
    old_grouped_events?: EventGroup[];
    entry_events?: EventGroup[];
  };
};
