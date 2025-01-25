"use client";
import { heading } from "@/lib/motion/variants";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const MotionParagraph = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <motion.p variants={heading} className={className}>
      {children}
    </motion.p>
  );
};
export default MotionParagraph;
