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
  const newOrgData: any = await API.graphql(graphqlOperation(mutations.createOrganization, { input: { ...organization } }))
  const newOrg = newOrgData?.data.createOrganization as Organization

  // Create tags
  if (organization.Tags) {
    for (const tag of organization.Tags?.items) {
      if (tag) {
        await API.graphql(graphqlOperation(mutations.createOrganizationTag, {
          input: {
            tagID: tag.id,
            organizationID: newOrg
          }
        }))
      }
    }
  }

  console.log('created org:', newOrg.name)

  return newOrg
}

export async function deleteOrganization({ id, _version }: Organization) {
  const newOrg = await API.graphql(graphqlOperation(mutations.deleteOrganization, { input: { id, _version } }))
  return newOrg
}