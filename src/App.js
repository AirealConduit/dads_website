import topImage from './images/PowerWash.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={topImage} className="App-logo" alt="logo" />
        <p>
          Welcome to Eshkol's Cleaners
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to schedule
        </a>
      </header>
      <body className="App-body">
      <p>
          This is the BODY
        </p>
      </body>
      <footer className="App-footer">
        <p>
          This is the FOOTER
        </p>
      </footer>
    </div>
  );
}

export default App;
