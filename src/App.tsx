import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { IOrganization, Organization } from './Organization';

export function Temp() {
  return <p>Temp</p>
}

export function Home() {
  const [organizations, setOrganizations] = useState<IOrganization[]>([])

  useEffect(() => {
    fetch('https://us-central1-btlaw-probono-poc.cloudfunctions.net/getOrganizations')
    .then(res =>res.json())
    .then(json => setOrganizations(json))
  }, [])

  
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>

      {organizations.map(org => <Organization organization={org} />)}

    </div>
  );
}


export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload2.
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

export default App;
