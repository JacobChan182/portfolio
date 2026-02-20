import ChanocasterViewer from './ChanocasterViewer';

function Intro2() {
  return (
    <div className="section">
      <h2>Music</h2>
      <div className="section-box">
      I'm a huge fan of 2000s pop punk music, and my passion for building things bled into my fascination of the late Jerry Finn's music production techniques in Blink-182's <i>Enema of the State</i>. In addition to learning some of his production techniques, I built a low-budget replica of Tom Delonge's Signature Stratocaster to help reach maximum authenticity. Today, I'm proud to present to you the Blink-650 Chanocaster!

      </div>
      <div className="intro2-row">
        <div className="intro2-left section-box">
            <h2>The Blink-650 Chanocaster</h2>
            <ul>
                <li>Modified Squier Sonic Flash Pink Hardtail</li>
                <li>Seymour Duncan SH-8 Invader Pickup</li>
                <li>Treble Bleed Circuitry</li>
                <li>Shiny Pearloid Pickguard</li>
                <li>Ernie Ball Skinny Top Heavy Bottom Slinky Strings</li>
            </ul>
        </div>
        <div className="intro2-right section-box">
          <ChanocasterViewer />
        </div>
      </div>
    </div>
  );
}

export default Intro2;