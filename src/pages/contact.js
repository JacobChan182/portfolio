import Aurora from '../components/Aurora';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContactCard from '../components/portfolioHome/ContactCard';

export default function Contact () {
    return (
      <header className="App-header">
              <h1>Feel free to email or connect with me on LinkedIn!</h1>
              <ContactCard name="Jacob Chan" link="https://www.linkedin.com/in/jacobchan182"/>
      </header>
  );
}