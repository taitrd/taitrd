"use client";
import { heading } from "@/lib/motion/variants";
import { motion, Transition } from "framer-motion";
import { PropsWithChildren } from "react";

const MotionSpan = ({
  children,
  className,
  variants = null,
}: PropsWithChildren<{
  className?: string;
  transition?: Transition | undefined;
  variants: any;
}>) => {
  return (
    <motion.div variants={variants || heading} className={className}>
      {children}
    </motion.div>
  );
};
export default MotionSpan;
