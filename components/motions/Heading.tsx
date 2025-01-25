"use client";
import { heading } from "@/lib/motion/variants";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const MotionHeading = ({
  children,
  className,
  variants = null,
}: PropsWithChildren<{ className?: string; variants?: any }>) => {
  return (
    <motion.h1 variants={variants || heading} className={className}>
      {children}
    </motion.h1>
  );
};
export default MotionHeading;
