import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bon apetit.
        </p>
        <a
          className="App-link"
          href="https://hyl-petr.xf.cz"
          target="_blank"
          rel="noopener noreferrer"
        >
          my page
        </a>
      </header>
    </div>
  );
}

export default App;
