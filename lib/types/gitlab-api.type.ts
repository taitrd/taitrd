export type GitlabEvent = {
  id: number;
  project_id: number;
  action_name: string;
  target_id: number | null;
  target_iid: number | null;
  target_type: string | null;
  target_title: string | null;
  author_id: number;
  created_at: string;
  push_data?: {
    commit_count?: number;
    action?: string;
    ref_type?: string;
    ref?: string;
  };
};
