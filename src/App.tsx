import { motion } from "motion/react";
export const App = () => {
  return(
    <div className="h-screen flex items-center justify-center">
      <motion.div 
      initial={{x:200}}
      animate={{x:0}}
      transition={{ type:"spring", duration: 1, delay: 0.5, stiffness:300}}
      className="w-28 h-28 bg-red-600"></motion.div>
    </div>
  );
};