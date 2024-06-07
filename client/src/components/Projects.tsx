import { useAppSelector } from '../app/hooks';
import Cards from './Cards';
import SectionHeading from './SectionHeading';

function Projects() {
  const portfolioData = useAppSelector((state) => state.app);
  const projects = portfolioData?.portfolioData?.projects;

  return (
    <div
      className="flex flex-col justify-center items-center scroll-mt-28"
      id="projects"
    >
      <SectionHeading>my projects</SectionHeading>
      {projects?.map((project, index) => (
        <Cards
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags}
          imageUrl={project.imageUrl}
          imgHref={project.imgHref}
        />
      ))}
    </div>
  );
}

export default Projects;
