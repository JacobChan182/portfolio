import Footer from '../components/Footer';
import Welcome from '../components/portfolioHome/Welcome';
import Intro1 from '../components/portfolioHome/Intro1';
import Intro2 from '../components/portfolioHome/Intro2';
import Intro3 from '../components/portfolioHome/Intro3';
import Intro4 from '../components/portfolioHome/Intro4';
import Contact from '../components/portfolioHome/contact';
import ProjectsShowcase from '../components/portfolioHome/ProjectsShowcase';

export default function Home () {
    return (
    <div>
      <section id="home"><Welcome /></section>
      <section id="projects"><ProjectsShowcase /></section>
      <section id="about"><Intro1 /></section>
      <Intro4 />
      <Intro2 />
      <Intro3 />
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}