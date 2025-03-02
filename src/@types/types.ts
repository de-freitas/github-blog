export interface ProfileProps {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  followers: string;
  html_url: string;
  type: string;
}

export interface IssuesProps {
  number: string;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  comments: string;
}
