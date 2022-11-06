import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}


export default function App() {
  return (
    <div>
      <h1>Budget!</h1>
    </div>
  );
}

import { Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <h1>Budget!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}

import { Outlet, Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <h1>Budget!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet /> {/* add outlet so App component still renders*/}
    </div>
  );
}

