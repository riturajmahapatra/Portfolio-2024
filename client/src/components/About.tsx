import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

function About() {
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
        <p className="mb-3">
          Civil engineer by degree, coder by heart. Built my coding skills from
          the ground up as a self-taught developer, I love the problem-solving
          thrill of web development. I craft solutions with React, Next.js,
          Node.js, and MongoDB (and dabble in TypeScript & UI Design). Always
          learning, always building. Looking for new{' '}
          <span className="font-medium">experiences</span> as a software
          developer.
        </p>

        <p className="mb-3">
          <span className="italic">When I'm not coding</span>, I enjoy cooking
          food , watching anime, and playing with my dog.
        </p>
      </motion.section>
    </div>
  );
}

export default About;
