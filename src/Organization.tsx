import {
  useQuery
} from '@tanstack/react-query'
import { useState } from 'react'
import OrganizationModal from './OrganizationModal'

export interface IOrganization {
  name: string
  description: string
  btContactName?: string
  volunteerContactName?: string
  volunteerContactEmail?: string
  volunteerContactPhone?: string
  orgUrl?: string
  volunteerUrl?: string
  tags: string[]
  trainingInformation?: string
  areasServed?: string
}

export interface OrganizationProps {
  organization: IOrganization
}

export function useOrganizations() {
  return useQuery<IOrganization[]>(['organizations'], async () => {
    const res = await fetch('https://us-central1-btlaw-probono-poc.cloudfunctions.net/getOrganizations')
    const json = await res.json()
    return json
  })
}

function getDescriptionTruncated(description: string) {
  const maxLength = 400

  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "…"
  }
  else return description
}


export function Organization({ organization }: OrganizationProps) {
  const [showModal, setshowModal] = useState<Boolean>(false)

  return (
    <div className="w-96 m-4 p-4 flex flex-col rounded overflow-hidden shadow-lg" key={organization.name}>
      <div className='flex justify-between cursor-pointer'>
        <div className="font-semibold text-xl mb-2 underline hover:font-bold cursor-default"><a href={`https://${organization.orgUrl}`} target='_blank' rel="noreferrer">{organization.name}</a></div>
        <svg onClick={() => setshowModal(true)} className="h-4" height="32" id="expand" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d=" M16 4 L28 4 L28 16 L24 12 L20 16 L16 12 L20 8z M4 16 L8 20 L12 16 L16 20 L12 24 L16 28 L4 28z " /></svg>
      </div>
      <div className="flex flex-row flex-wrap">
        {organization.tags.map(t => <div key={t} className="flex"><div className={`text-sm p-1 px-2 m-1 border-2 rounded-full inline-block bg-gray-200`}>{t}</div>
        </div>)}
      </div>
      {showModal && <OrganizationModal organization={organization} hideModal={() => setshowModal(false)} />}
      <div className="text-gray-700 text-base mb-2 overflow-hidden text-ellipsis">{getDescriptionTruncated(organization.description)}</div>
      <div className="grow"></div>
      <div className="flex flex-row">
        <div className="grow"></div>
        <a href={`${organization.volunteerUrl ? organization.volunteerUrl : `mailto:${organization.volunteerContactEmail}`}`} target="_blank" rel="noreferrer"><button className="w-42 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Volunteer Now
        </button></a>
      </div>

    </div>
  )
}