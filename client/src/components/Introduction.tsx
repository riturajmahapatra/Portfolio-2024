// import myImg from '../assets/rituraj-1.jpeg';
import { motion } from 'framer-motion';
import cv from '../assets/CV/CV_RITURAJ_24.pdf';
import '../index.css';
import { HiDownload } from 'react-icons/hi';
import { BiSolidRightArrow } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';
import { FaSquareGithub } from 'react-icons/fa6';

export default function Introduction() {
  return (
    <section className=" flex flex-col items-center justify-center mb-28 max-w-[50rem] text-center sm:mb-0 m-auto">
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'tween', duration: 0.25 }}
          id="home"
        >
          {/* <img
            src={myImg}
            alt="rituraj"
            className="w-24 object-cover quality-high h-auto rounded-full shadow-2xl border-[0.3rem] border-white mt-28"
          /> */}
        </motion.div>
      </div>
      <motion.p
        className="mb-10 mt-[7rem] px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Rituraj Mahapatra.</span> I'm a
        novice <span className="font-bold">full-stack developer</span> with some
        experience. I enjoy building{' '}
        <span className="italic">sites & apps</span>. Iam passionate about
        creating engaging web experiences. 💡 Currently exploring the world of
        WEB using
        <span className="underline"> React & Next.js</span>.
      </motion.p>
      <div className="flex justify-center items-center mt-12 mb-20 gap-6 max-sm:flex-wrap">
        <a
          className="group text-white bg-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer "
          href="#contact"
        >
          Contact Me here
          <BiSolidRightArrow className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
        <a
          className="group bg-white px-7 py-3  border flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer "
          href={cv}
          download
        >
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/riturajmahapatra1997/"
          target="_blank"
          className="bg-white  px-3 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer "
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/riturajmahapatra"
          target="_blank"
          className=" bg-white  px-3 py-3 flex items-center text-[1.35rem] gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
        >
          <FaSquareGithub />
        </a>
      </div>
    </section>
  );
}