import Footer from '../components/Footer';
import Welcome from '../components/portfolioHome/Welcome';
import Intro1 from '../components/portfolioHome/Intro1';
import Intro2 from '../components/portfolioHome/Intro2';
import Intro3 from '../components/portfolioHome/Intro3';
import Intro4 from '../components/portfolioHome/Intro4';
import ProjectsShowcase from '../components/portfolioHome/ProjectsShowcase';

export default function Home () {
    return (
    <div>
      <Welcome />
      <ProjectsShowcase />
      <Intro1 />
      <Intro4 />
      <Intro2 />
      <Intro3 />
      <Footer />
    </div>
  );
}