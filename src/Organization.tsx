import { useState } from 'react'
import OrganizationModal from './OrganizationModal'
import _ from "lodash";
import EditIcon from "./edit-button-svgrepo-com.svg"
import { toTitleCase } from './common';
import { useOrganization } from './amplifyHooks/useOrganization';

export interface IOrganization {
  id: string
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
  organizationID: string
}

function getDescriptionTruncated(description: string) {
  const maxLength = 400

  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "…"
  }
  else return description
}


export function Organization({ organizationID }: OrganizationProps) {
  const [showModal, setshowModal] = useState<Boolean>(false)
  const { organization, tags } = useOrganization(organizationID)
  const showEditButton = false

  if (!organization) {
    return <></>
  }
  return (
    <div className="w-96 m-4 p-4 flex flex-col rounded overflow-hidden shadow-lg" key={organization.name}>
      <div className='flex justify-between cursor-pointer'>
        <div className="font-semibold text-xl mb-2 underline hover:font-bold cursor-default"><a href={`https://${organization.orgUrl}`} target='_blank' rel="noreferrer">{organization.name}</a></div>

      </div>
      <div className="flex flex-row flex-wrap">
        {_.uniq(tags).map(t => <div key={`${organizationID}-${t.id}`} className="flex"><div className={`text-sm p-1 px-2 m-1 border-2 rounded-full inline-block bg-gray-200`}>{toTitleCase(t.name ?? '')}</div>
        </div>)}
      </div>
      {showModal && <OrganizationModal organizationID={organizationID} hideModal={() => setshowModal(false)} />}
      <div className="text-gray-700 text-base mb-2 overflow-hidden text-ellipsis">{getDescriptionTruncated(organization.description ?? '')}</div>
      <div className="grow"></div>
      <div className="flex flex-row justify-between">
        <button onClick={() => setshowModal(true)} className="w-42 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          More
        </button>
        {showEditButton && <a href={`/newOrg/${organization.id}`}>
          <img className='h-10 cursor-pointer hover:bg-gray-300 p-2 rounded' src={EditIcon} alt="React Logo" /></a>}
        <a href={`${organization.volunteerUrl ? organization.volunteerUrl : `mailto:${organization.volunteerContactEmail}`}`} target="_blank" rel="noreferrer"><button className="w-42 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Volunteer Now
        </button></a>
      </div>

    </div>
  )
}