import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({ className, children }: Props) {
  return (
    <section
      className={cn(
        "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 min-h-screen bg-transparent text-zinc-900 dark:text-zinc-50 p-6 relative",
        className
      )}
    >
      {children}
    </section>
  );
}
