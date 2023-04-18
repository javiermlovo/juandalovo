import logo from './logo-juandalovo.webp';
import './App.scss';


function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo mb-3" alt="logo" />
        <p>
          CORPORATIVE - ADVERTISING - INTERIOR DESIGN - PORTRAIT
        </p>
        <p>
          This project is a portfolio of a professional photographer and publisher
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          More info click here
        </a>
      </header>
    </div>
  );
}

export default App;
