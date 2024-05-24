import About from '../About';
import Exprience from '../Exprience';
import Introduction from '../Introduction';
import Projects from '../Projects';
import SectionDivider from '../Section-Divider';
import Skills from '../Skills';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Introduction />
      <SectionDivider />
      <About />
      <Projects />
      <SectionDivider />
      <Skills />
      <Exprience />
    </div>
  );
}
