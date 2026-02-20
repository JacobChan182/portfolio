import ChanocasterViewer from './ChanocasterViewer';

function Intro2() {
  return (
    <div className="section">
      <h2>Personal Interests</h2>
      <div className="intro2-row">
        <div className="intro2-left section-box" />
        <div className="intro2-right section-box">
          <ChanocasterViewer />
        </div>
      </div>
    </div>
  );
}

export default Intro2;