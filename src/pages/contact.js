import Aurora from '../components/Aurora';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContactCard from '../components/portfolioHome/ContactCard';

export default function Contact () {
    return (
      <header className="App-header">
        <h1>Feel free to email or connect with me on LinkedIn!</h1>    
          <div
          style={{
            minHeight: "2vh",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
          >
          <ContactCard platform="linkedin" name="Jacob Chan" link="https://www.linkedin.com/in/jacobchan182"/>
          <ContactCard platform="github" name="JacobChan182" link="https://github.com/jacobchan182"/>
          <ContactCard platform="email" name="jacob.chan@mail.utoronto.ca" link="mailto:jacob.chan@mail.utoronto.ca"/>
          </div>
      </header>
  );
}