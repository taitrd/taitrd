"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import SocialIcon from "./social-icons";
import siteMetadata from "@/data/siteMetadata";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-6 max-w-xs">
      <Button
        variant="ghost"
        size="icon"
        className="p-6 [&_svg]:size-8 hover:shadow hover:bg-slate-200 dark:hover:bg-slate-500"
        asChild
      >
        <a href={siteMetadata.github} target="_blank" rel="noopener noreferrer">
          <Github className="h-16 w-16" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        asChild
        className="p-6 [&_svg]:size-8 hover:shadow hover:bg-slate-200 dark:hover:bg-slate-500"
      >
        <SocialIcon kind="twitterx" href={siteMetadata.twitter} size={8} />
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a
          className="p-6 [&_svg]:size-8 hover:shadow hover:bg-slate-200 dark:hover:bg-slate-500"
          href={siteMetadata.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="p-6 [&_svg]:size-8 hover:shadow hover:bg-slate-200 dark:hover:bg-slate-500"
        asChild
      >
        <SocialIcon
          kind="freelancer"
          href={siteMetadata.freelancer}
          size={16}
        />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="p-6 [&_svg]:size-8 hover:shadow hover:bg-slate-200 dark:hover:bg-slate-500"
        asChild
      >
        <SocialIcon kind="upwork" href={siteMetadata.upwork} size={12} />
      </Button>
    </div>
  );
}
