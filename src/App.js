import topImage from './images/PowerWash.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
              <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
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
