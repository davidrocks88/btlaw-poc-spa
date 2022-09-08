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
  <div className="font-bold">
    <h1>name: {organization.name}</h1>
    <h2>description: {organization.description}</h2>
    <h2>tags: {organization.tags}</h2>
  </div>
  )
}