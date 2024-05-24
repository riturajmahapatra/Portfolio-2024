import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './SectionHeading';
import { experiencesData } from '../../lib/data';

function Exprience() {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
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
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: 'rgba(255, 255, 255)',
              fontSize: '1.5rem',
            }}
          >
            <h3 className="font-semibold text-xl capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            <p className="!mt-1 !font-normal text-gray-700 ">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Exprience;
