export enum EventType {
  PushEvent = "PushEvent",
  PullRequestEvent = "PullRequestEvent",
  CreateEvent = "CreateEvent",
}
export type EventItem = {
  id: string;
  type: string | null;
  repo: {
    id: number;
  };
  payload: any;
  created_at: string | null;
};
export type EventGroup = {
  date: string;
  events: EventItem[];
  events_count?: number;
};
export type Event = {
  id: string;
  type: string | null;
  actor: any;
  repo: {
    id: number;
  };
  org?: any;
  payload: {
    action?: string;
    issue?: any;
    comment?: any;
    pages?: {
      page_name?: string;
      title?: string;
      summary?: string | null;
      action?: string;
      sha?: string;
      html_url?: string;
    }[];
  };
  public: boolean;
  created_at: string | null;
};
