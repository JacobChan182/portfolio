import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';

function App() {
  return (
    <div>
      <Nav />
      <Welcome />
      <hr></hr>
      <Intro1 />
      <hr></hr>
      <Intro2 />
      <hr></hr>
      <Intro3 />
      <Footer />
    </div>
  );
}

export default App;
