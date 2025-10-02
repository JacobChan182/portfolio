import logo from '../images/jclogo.png';

function Welcome() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: "800px", height: "auto" }}/>
        </header>
    );
}

export default Welcome;