"use client";
import { cards } from "@/lib/motion/variants";
import { motion, Transition } from "framer-motion";
import { PropsWithChildren } from "react";

const MotionCard = ({
  children,
  transition,
  className,
}: PropsWithChildren<{
  className?: string;
  transition?: Transition | undefined;
}>) => {
  return (
    <motion.div variants={cards} transition={transition} className={className}>
      {children}
    </motion.div>
  );
};
export default MotionCard;
