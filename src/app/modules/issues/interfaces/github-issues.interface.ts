import { IGitHubLabel } from "./github-labels.interface"

export enum StateIssue {
  Open = 'open',
  Close = 'closed',
  All = 'all'
}

export interface IGitHubIssue {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: IUser
  labels: IGitHubLabel[]
  state: string;
  locked: boolean
  assignee?: IAssignee
  assignees: IAssignee[]
  milestone?: IMilestone
  comments: number
  created_at: string
  updated_at: string
  closed_at: any
  author_association: string
  type: any
  active_lock_reason: any
  draft?: boolean
  pull_request?: IPullRequest
  body?: string
  closed_by: any
  reactions: IReactions
  timeline_url: string
  performed_via_github_app: any
  state_reason: any
  sub_issues_summary?: ISubIssuesSummary
}

export interface IUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  user_view_type: string
  site_admin: boolean
}

export interface IAssignee {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  user_view_type: string
  site_admin: boolean
}

export interface IMilestone {
  url: string
  html_url: string
  labels_url: string
  id: number
  node_id: string
  number: number
  title: string
  description: string
  creator: ICreator
  open_issues: number
  closed_issues: number
  state: string
  created_at: string
  updated_at: string
  due_on: any
  closed_at: any
}

export interface ICreator {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  user_view_type: string
  site_admin: boolean
}

export interface IPullRequest {
  url: string
  html_url: string
  diff_url: string
  patch_url: string
  merged_at: any
}

export interface IReactions {
  url: string
  total_count: number
  "+1": number
  "-1": number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export interface ISubIssuesSummary {
  total: number
  completed: number
  percent_completed: number
}
