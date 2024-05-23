import About from '../About';
import Introduction from '../Introduction';
import Projects from '../Projects';
import SectionDivider from '../Section-Divider';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Introduction />
      <SectionDivider />
      <About />
      <Projects />
    </div>
  );
}
