"use client";
import { heading } from "@/lib/motion/variants";
import { motion, Transition } from "framer-motion";
import { PropsWithChildren } from "react";

const MotionDd = ({
  children,
  className,
  variants = null,
}: PropsWithChildren<{
  className?: string;
  transition?: Transition | undefined;
  variants: any;
}>) => {
  return (
    <motion.dd variants={variants || heading} className={className}>
      {children}
    </motion.dd>
  );
};
export default MotionDd;
