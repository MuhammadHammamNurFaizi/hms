import logo1 from '../assets/logo1.svg';
import logo192 from '../assets/logo192.png';
import Header from './Header';

function App1() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo" />
          <img src={logo192} className="App-logo" alt="logo" />
          <p>
            Ini <code>adalah</code> Tambahan.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Header />
      </div>
    );
  }

  export default App1;