import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <motion.div
      className="bg-gray-200 my-10 h-20 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, y: '-30%' }}
      animate={{ opacity: 1, y: '0%' }}
      transition={{ delay: 0.35 }}
    ></motion.div>
  );
};

export default SectionDivider;
