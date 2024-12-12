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
        "mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-5xl xl:max-w-[1170px] xl:px-0 min-h-screen bg-transparent text-zinc-900 dark:text-zinc-50 p-6 relative",
        className
      )}
    >
      {children}
    </section>
  );
}
