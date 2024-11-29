"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import SocialIcon from "./social-icons";
import siteMetadata from "@/data/siteMetadata";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-6 max-w-xs">
      <Button variant="ghost" size="icon" className="p-6 [&_svg]:size-8 hover:shadow hover:bg-slate-200 dark:hover:bg-slate-500">
        <a
          href="https://github.com/taitrd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-16 w-16" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="p-6 [&_svg]:size-8 hover:shadow hover:bg-slate-200 dark:hover:bg-slate-500">
        <a
          href="https://x.com/taitrd49"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon kind="twitterx" href={siteMetadata.twitter} size={6} />
          <span className="sr-only">X</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="p-6 [&_svg]:size-8 hover:shadow hover:bg-slate-200 dark:hover:bg-slate-500">
        <a
          href={siteMetadata.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="p-6 [&_svg]:size-8 hover:shadow hover:bg-slate-200 dark:hover:bg-slate-500">
        <SocialIcon
          kind="freelancer"
          href={siteMetadata.freelancer}
          size={16}
        />
        <span className="sr-only">Freelancer</span>
      </Button>
      <Button variant="ghost" size="icon" className="p-6 [&_svg]:size-8 hover:shadow hover:bg-slate-200 dark:hover:bg-slate-500">
        <SocialIcon kind="upwork" href={siteMetadata.upwork} size={12} />
        <span className="sr-only">Upwork</span>
      </Button>
    </div>
  );
}
