import {
  useQuery
} from '@tanstack/react-query'
import { API, graphqlOperation } from 'aws-amplify';
import { Organization, OrganizationTag } from '../API';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';


export function useOrganization(id: string) {
  const { isLoading, data } = useQuery<Organization>(['organization', 'amplify', id], async () => {
    const organizationsData = await API.graphql({ query: queries.getOrganization, variables: { id } }) as { data: { getOrganization: Organization } }
    const organization = organizationsData.data?.getOrganization

    return organization
  },
    {
      cacheTime: 0
    }
  )

  return {
    isLoading,
    organization: data
  }
}

export async function createOrganization(organization: Omit<Organization, 'id' | '__typename' | 'createdAt' | 'updatedAt' | '_version' | '_lastChangedAt'>) {
  const newOrg = await API.graphql(graphqlOperation(mutations.createOrganization, { input: { ...organization } }))
  return newOrg as Organization
}

export async function deleteOrganization({ id, _version }: Organization) {
  const newOrg = await API.graphql(graphqlOperation(mutations.deleteOrganization, { input: { id, _version } }))
  return newOrg
}

export async function createOrganizationTag(organizationID: string, tagID: string) {
  const newOrgTag = await API.graphql(graphqlOperation(mutations.createOrganizationTag, { input: { organizationID, tagID } }))
  return newOrgTag as OrganizationTag
}