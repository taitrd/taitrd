"use client";
import { cards } from "@/lib/motion/variants";
import { motion, Transition } from "framer-motion";
import { PropsWithChildren } from "react";

const MotionBlock = ({
  children,
  className,
  variants = null,
  transition,
}: PropsWithChildren<{
  className?: string;
  transition?: Transition | undefined;
  variants: any;
}>) => {
  return (
    <motion.div
      variants={variants || cards}
      className={className}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
export default MotionBlock;
