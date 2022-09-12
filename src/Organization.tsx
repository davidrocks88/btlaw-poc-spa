import {
  useQuery
} from '@tanstack/react-query'

export interface IOrganization {
  name: string
  description: string
  btContactName?: string
  btContactEmail?: string
  volunteerEmail?: string
  orgUrl?: string
  tags: string[]
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


export function Organization({ organization }: OrganizationProps) {
  return (
    <div className="w-96 m-4 p-4 flex flex-col rounded overflow-hidden shadow-lg" key={organization.name}>
      <a href={`https://${organization.orgUrl}`} target='_blank' rel="noreferrer"><div className="font-bold text-xl mb-2 hover:underline">{organization.name}</div></a>
      <div className="flex flex-row flex-wrap">
        {organization.tags.map(t => <div key={t} className="flex"><div className={`text-sm p-1 px-2 m-1 border-2 rounded-full inline-block bg-gray-200`}>{t}</div>
        </div>)}
      </div>
      <div className="text-gray-700 text-base mb-2 overflow-hidden text-ellipsis">{organization.description}</div>
      <div className="grow"></div>
      <div className="flex flex-row">
        <div className="grow"></div>
        <a href={`mailto:${organization.volunteerEmail}`} target="_blank" rel="noreferrer"><button className="w-42 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Volunteer Now
        </button></a>
      </div>

    </div>
  )
}