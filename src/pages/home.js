import Welcome from '../components/portfolioHome/Welcome';
import Intro1 from '../components/portfolioHome/Intro1';
import Chanocaster from '../components/portfolioHome/Chanocaster';
import Listening from '../components/portfolioHome/Listening';
import TopSongs from '../components/portfolioHome/TopSongs';
//import Intro3 from '../components/portfolioHome/Intro3';
import Intro4 from '../components/portfolioHome/Intro4';
import Contact from '../components/portfolioHome/contact';
import ProjectsShowcase from '../components/portfolioHome/ProjectsShowcase';
import FunStuff from '../components/portfolioHome/FunStuff';

export default function Home () {
    return (
    <div>
      <section id="home"><Welcome /></section>
      <section id="about">
        <Intro1 />
        <Intro4 />
      </section>
      <section id="projects"><ProjectsShowcase /></section>

      <section id="fun-stuff">
        <FunStuff />
        <Chanocaster />
        <section className="section">
          <Listening />
        </section>
        <section className="section">
          <TopSongs />
        </section>
      </section>

      <section id="contact"><Contact /></section>
    </div>
  );
}