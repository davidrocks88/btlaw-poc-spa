import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Organization, useOrganizations } from './Organization';
import { Tag } from './Tag';

export function Temp() {
  return <p>Temp</p>
}

export function Home() {
  const { data: organizations } = useOrganizations()
  const [filters, setFilters] = useState<any>({})
  const [searchString, setSearchString] = useState<string>('')

  function updateFilter(name: string, shouldFilter: Boolean) {
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

  if (searchString.length > 0) {
    orgsToShow = orgsToShow?.filter((org) => org.name.toLowerCase().includes(searchString.toLowerCase()) || org.description.toLowerCase().includes(searchString.toLowerCase()) || org.tags.join('').toLowerCase().includes(searchString.toLowerCase()))
  }


  return (
    <div>
      <div className='p-2 bg-gray-200 m-1 border'>
        <p className='w-1/2'>{'Welcome to the B&T pro bono programs explorer. All of the firm’s approved programs are listed. To find just programs that might interest you, click on the areas of interest below. For each one you select the pro bono programs that offer projects in that area will show as cards. Each card has the program description (the name of the program is a link to its website), a description of the organization, links to find current opportunities, and a button to email the organization to let them know you are interested in volunteering. Click Reset to clear the areas of interest. You can also search by using the search window.'}
        </p>
      </div>
      <div className='mt-1 flex flex-row flex-wrap gap-y-2 items-end align-middle content-center'>
        <div className='cursor-pointer border-2 hover:bg-gray-100 border-white rounded-full p-2 font-lg font-bold' onClick={() => setFilters({})}>Reset</div>
        {tags?.map(t => <div key={t} className='mb-3'><Tag filters={filters} name={t} handleClick={updateFilter} /></div>)}
      </div>
      <hr />

      <div className="relative w-1/4 m-2">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input onChange={(event) => setSearchString(event.target.value)} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Organization, Descriptions, Tags..." required />
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
