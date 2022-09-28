import { useState } from 'react';
import './App.css';
import { Organization } from './Organization';
import { Tag } from './Tag';
import { useTags } from './hooks/useTags';
import { useOrganizationList } from './hooks/useOrganizationList';

export function App() {
  const { organizations } = useOrganizationList()
  const { tags } = useTags()
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

  if (searchString.length > 0) {
    orgsToShow = orgsToShow?.filter((org) => org.name.toLowerCase().includes(searchString.toLowerCase()) || org.description.toLowerCase().includes(searchString.toLowerCase()) || org.tags.join('').toLowerCase().includes(searchString.toLowerCase()))
  }


  return (
    <div>
      <div className='p-2 bg-gray-200 m-1 border'>
        <p>Welcome to the BT pro bono program and opportunities Finder. This website will help you find pro bono programs and opportunities in the areas in which you are interested.</p>
        <br />
        <p>How to use the Finder:</p>
        <p className='pl-2'>1. Click on one or more "tags" in the column on the left with areas in which you are interested. Or, use the search bar above the tags. Click Reset to clear the selected tags.</p>
        <p className='pl-2'>2. For all the tags you've selected, cards will appear on the right. Each card is a pro bono program which offers opportunities in selected areas. You can browse all cards by not selecting any tags.</p>
        <p className='pl-2'>3. For each card, the name of the organization is a link to its website. Cards which have Various as a tag have a large number of areas of law/interest, and not all may be listed. Click on the Volunteer Now button to send an email directly to the volunteer coordinator at that organization. </p>
        <p className='pl-2'>4. Click More to learn about training, geographic areas served, contact information, B&T contact person (if any), etc. Click on Find Current Opportunities to link to the organization's website with more information.</p>
        <br />
        <p>
          Cards have as much information as we currently have; some may not have all areas of interest tagged or have full information.
        </p>
        <p className='text-xs mt-1'>(c) Copyright 2022 Barnes & Thornburg LLP All Rights Reserved</p>

      </div>
      <div className="relative w-1/2 m-2 grow">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <div className='flex flex-row gap-4'>
          <input onChange={(event) => setSearchString(event.target.value)} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Organization, Descriptions, Tags..." required />
        </div>
      </div>
      <div className='grid grid-flow-col grid-cols-7 justify-start content-start items-start bg-gray-100'>
        <div className='pt-2 flex flex-row flex-wrap gap-y-2 items-end align-middle content-center'>
          <div className='cursor-pointer hover:bg-gray-200 rounded-full p-2 font-lg font-bold mb-[2px]' onClick={() => setFilters({})}>Reset</div>
          {tags.map(t => <div key={t} className='mb-3'><Tag filters={filters} name={t} handleClick={updateFilter} /></div>)}
        </div>

        <div className='col-span-6 flex flex-row flex-wrap'>
          {orgsToShow?.sort((a, b) => (a.name < b.name ? -1 : 1)).map(org => <Organization organization={org} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
