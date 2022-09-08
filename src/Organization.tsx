import { Tag } from "./Tag"

export interface IOrganization {
  id: string
	name: string
	description: string
	tags: string[]
}

export interface OrganizationProps {
  organization: IOrganization
}

export function Organization({organization}: OrganizationProps) {
  return (
  <div className="border-stone-900 border-2 w-60 m-4 p-4">
    <h1>name: {organization.name}</h1>
    <h2 className=" mb-2">description: {organization.description}</h2>
    {organization.tags.map(t=><Tag name={t} />)}
  </div>
  )
}