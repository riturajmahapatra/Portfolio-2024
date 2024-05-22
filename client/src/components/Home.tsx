import myImg from '../assets/rituraj-1.jpeg';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <img
          src={myImg}
          alt="rituraj"
          className="w-24 object-cover quality-high h-auto rounded-full shadow-2xl border-[0.2rem] border-white mt-28"
        />
      </motion.div>
    </div>
  );
}
