import { projectsData } from '../../lib/data';
import Cards from './Cards';
import SectionHeading from './SectionHeading';

function Projects() {
  return (
    <div
      className="flex flex-col justify-center items-center scroll-mt-28"
      id="projects"
    >
      <SectionHeading> my projects</SectionHeading>

      {projectsData.map((project, index) => (
        <div key={index}>
          <Cards {...project} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
