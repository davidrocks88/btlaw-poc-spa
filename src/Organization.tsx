export interface IOrganization {
  id: string
	name: string
	description: string
	// tags: [Tag]
}

export interface OrganizationProps {
  organization: IOrganization
}

export function Organization({organization}: OrganizationProps) {
  return <>
  <h1>name: {organization.name}</h1>
  <h2>description: {organization.description}</h2>
  </>
}