"use client";
import { heading } from "@/lib/motion/variants";
import { motion, Transition } from "framer-motion";
import { PropsWithChildren } from "react";

const MotionListItem = ({
  children,
  className,
  variants = null,
  transition,
}: PropsWithChildren<{
  className?: string;
  transition?: Transition | undefined;
  variants?: any;
}>) => {
  return (
    <motion.h1
      variants={variants || heading}
      transition={transition}
      className={className}
    >
      {children}
    </motion.h1>
  );
};
export default MotionListItem;
