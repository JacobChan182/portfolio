import logo from './logo.svg'; 
import {Aurora} from './components/Aurora';
import './App.css';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import FullPageScroll from './components/FullPageScroll';

function App() {
  return (
    <div>
      <Aurora />
      <Nav />
      <FullPageScroll />
      <Footer />
    </div>
  );
}

export default App;
