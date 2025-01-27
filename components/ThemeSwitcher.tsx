"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/contexts/theme";
import { Skeleton } from "./ui/skeleton";
import { enter } from "@/lib/motion/variants";
import dynamic from "next/dynamic";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { setTheme: setThemeCtx } = useThemeContext();
  const [mounted, setMounted] = React.useState(false);

  const changeTheme = React.useCallback(
    (value: string | undefined) => {
      if (value) {
        setThemeCtx(value);
        setTheme(value);
      }
    },
    [setTheme, setThemeCtx]
  );

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="h-[36px] w-[36px]" />;
  }

  return (
    <MotionBlock variants={enter}>
      {(theme === "light" || theme === "system") && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => changeTheme("dark")}
          aria-label="Toggle theme"
          className="dark:hidden"
        >
          <Moon className="h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
      {(theme === "dark" || theme === "system") && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => changeTheme("light")}
          aria-label="Toggle theme"
          className="hidden dark:flex"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </MotionBlock>
  );
}
