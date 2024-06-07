import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
interface CardProps {
  title?: string;
  description?: string;
  tags?: string[];
  imageUrl?: string;
  imgHref?: string;
}

const Cards = ({ title, description, tags, imageUrl, imgHref }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 2', '1.6 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className=" my-3 sm:mb-8 last:mb-0"
    >
      <a
        className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition flex sm:flex-row flex-col "
        href={imgHref}
        target="_blank"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags?.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-gray-900 rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={imageUrl}
          alt="Projects"
          className="absolute hidden sm:block top-8 h-[16rem] w-[35rem] rounded-lg shadow-2xl 
          -right-52 object-cover object-center "
        />
      </a>
    </motion.div>
  );
};

export default Cards;
