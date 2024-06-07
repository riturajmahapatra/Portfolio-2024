import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './SectionHeading';
import { useAppSelector } from '../app/hooks';
import { CgWorkAlt } from 'react-icons/cg';
import React from 'react';

function Exprience() {
  const portfolioData = useAppSelector((state) => state.app);
  console.log(portfolioData);
  const experience = portfolioData?.portfolioData?.experiences;
  console.log(experience);
  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experience?.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{
              borderRight: '0.4rem solid #9ca3af',
            }}
            date={experience.date}
            icon={React.createElement(CgWorkAlt)}
            iconStyle={{
              background: 'rgba(255, 255, 255)',
              fontSize: '1.5rem',
            }}
          >
            <h3 className="font-semibold text-xl capitalize">
              {experience.title}
            </h3>
            <p className="font-normal !mt-0">
              {experience.company} &nbsp; - &nbsp; {experience.location}
            </p>
            <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            <p className="!mt-1 !font-normal text-gray-700 ">
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Exprience;
