import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { IOrganization, Organization, useOrganizations } from './Organization';
import { Tag } from './Tag';

export function Temp() {
  return <p>Temp</p>
}

export function Home() {
  const { data: organizations } = useOrganizations()
  const [filters, setFilters] = useState<any>({})

  function updateFilter(name: string, shouldFilter: Boolean) {
    console.log({ name, shouldFilter })
    setFilters({
      ...filters,
      [name]: shouldFilter
    })
  }
  const currentFilters = Object.keys(filters)
  let areAllFalse = true

  for (let filterVal of Object.values(filters)) {
    areAllFalse = areAllFalse && filterVal === false
  }

  let orgsToShow = organizations

  if (Object.keys(filters).length > 0 && areAllFalse === false) {
    orgsToShow = orgsToShow?.filter(org => {
      for (let tag of org.tags) {
        if (filters[tag] === true) {
          return true
        }
      }
      return false
    })
  }

  console.log(filters)
  console.log(orgsToShow)

  return (
    <div>
      <h1>Home</h1>
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav> */}
      <div className='font-lg mb-4 font-bold'>Filters</div>
      {organizations?.map(org => org.tags.map(t => <Tag name={t} filter={updateFilter} />))}
      {orgsToShow?.map(org => <Organization organization={org} />)}

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
