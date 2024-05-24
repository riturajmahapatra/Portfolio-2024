import SectionHeading from './SectionHeading';
import { skillsData } from '../../lib/data';
import { motion } from 'framer-motion';

const fadeVariable = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Skills() {
  return (
    <div
      className="max-w-[53rem] scroll-mt-28 text-center sm:mb-28"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className=" flex justify-center items-center gap-4 flex-wrap text-lg text-gray-800">
        {skillsData.map((skills, index) => (
          <>
            {' '}
            <motion.li
              key={index}
              className="bg-white rounded-xl px-5 py-3 shadow-md border border-black/[0.2]"
              variants={fadeVariable}
              initial="initial"
              whileInView="animate"
              custom={index}
              viewport={{
                once: true,
              }}
            >
              {skills}
            </motion.li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
