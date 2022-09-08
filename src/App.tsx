import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Organization, useOrganizations } from './Organization';
import { Tag } from './Tag';
import { Link } from 'react-router-dom';

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

  return (
    <div>
      <div className='text-xl font-semibold'>BT Pro Bono Proof of Concept</div>
      <nav>
        <Link to="newOrg"><button className='p-2 m-2 border-2 border-black-100'>Create new Org</button></Link>
      </nav>
      <hr />
      <div className='font-lg my-4 font-bold'>Filters</div>
      {organizations?.map(org => org.tags.map(t => <Tag name={t} handleClick={updateFilter} />))}
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
