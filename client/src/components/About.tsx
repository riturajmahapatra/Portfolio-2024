import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useAppSelector } from '../app/hooks';

function About() {
  const portfolioData = useAppSelector((state) => state.app);
  // console.log(portfolioData);
  const about = portfolioData?.portfolioData?.about[0].about;
  // console.log(about);

  return (
    <div>
      <motion.section
        className=" max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
      >
        <SectionHeading>about me</SectionHeading>
        {about || ''}
      </motion.section>
    </div>
  );
}

export default About;
