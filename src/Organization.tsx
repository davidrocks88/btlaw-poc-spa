import { Tag } from "./Tag"
import {
  useQuery

} from '@tanstack/react-query'

export interface IOrganization {
  name: string
  description: string
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
    <div className="border-stone-900 border-2 w-96 m-4 p-4 flex flex-col">
      <div className="text-lg font-medium">{organization.name}</div>
      <div className="text-md font-normal italic mb-2">{organization.description}</div>
      <div className="flex flex-row flex-wrap">
        {organization.tags.map(t => <div className="flex"><Tag name={t} handleClick={(a: string) => { }} /></div>)}
      </div>
    </div>
  )
}