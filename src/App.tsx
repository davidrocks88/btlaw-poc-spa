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

  let tags = organizations?.map(o => o.tags).flat().sort((t1, t2) => t1.trim().toLocaleLowerCase().localeCompare(t2.trim().toLocaleLowerCase())).filter((v, i, a) => a.indexOf(v) === i)

  return (
    <div>
      <div className='text-xl font-semibold'>BT Pro Bono Proof of Concept</div>
      <nav>
        <Link to="newOrg"><button className='p-2 m-2 border-2 border-black-100'>Create new Org</button></Link>
      </nav>
      <hr />
      <div className='flex flex-row align-middle items-center'>
        <div className='font-lg my-4 font-bold'>Filters</div>
        <div className='ml-4 border-2 rounded-full p-2 font-lg my-4 font-bold' onClick={() => setFilters({})}>Reset filters</div>
      </div>
      <div className='flex flex-row flex-wrap gap-y-2'>
        {tags?.map(t => <div className='mb-3'><Tag name={t} handleClick={updateFilter} /></div>)}
      </div>

      <div className='flex flex-row flex-wrap'>
        {orgsToShow?.map(org => <Organization organization={org} />)}
      </div>

      {/* <table className='table-auto border-2 mt-6'>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>tags</th>
        </tr>
        {orgsToShow?.map(org => <tr className='border-2'>
          <td>
            {org.name}
          </td>
          <td>
            {org.description}
          </td>
          <td>
            <div className="flex flex-row flex-wrap">
              {org.tags.map(t => <div className="flex"><Tag name={t} handleClick={(a: string) => { }} /></div>)}
            </div>
          </td>
        </tr>)}
      </table> */}

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
