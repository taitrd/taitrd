import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
const MotionSection = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.section>
  );
};
export default MotionSection;
