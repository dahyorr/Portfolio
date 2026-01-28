import { ReactNode } from "react";

export interface MessageRequestBody{
  message: string;
  email: string;
  subject?: string;
  name: string;
}

export interface Project{
  title: string,
  description: ReactNode,
  shortDescription: string,
  images: string[],
  githubRepo?: string,
  liveUrl?: string,
  inProgress: boolean,
}