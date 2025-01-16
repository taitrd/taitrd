"use client";

import React, { PropsWithChildren } from "react";
import "./AnimatedBackground.css";
import { cn } from "@/lib/utils";
import { useThemeContext } from "@/contexts/theme";
function AnimatedBackground({
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  const { bgFlagNumber } = useThemeContext();
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      <div
        className={`absolute inset-0 bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 from-blue-50 via-blue-100 to-blue-200 animate-gradient-x`}
      />
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={cn(
              `absolute rounded-lg opacity-10 animate-rectangle-${i + 1}`,
            )}
            style={{
              left: `${bgFlagNumber * 100}%`,
              top: `${bgFlagNumber * 100}%`,
              width: `${bgFlagNumber * 300 + 1000}px`,
              height: `${bgFlagNumber * 300 + 1000}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
export default AnimatedBackground;
