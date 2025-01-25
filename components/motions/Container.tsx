"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
const MotionContainer = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <motion.section
      className={className}
      initial="initial"
      whileInView="animate"
      animate="animate"
    >
      {children}
    </motion.section>
  );
};
export default MotionContainer;
