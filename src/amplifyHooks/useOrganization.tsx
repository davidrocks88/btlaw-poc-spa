import {
  useQuery
} from '@tanstack/react-query'
import { API, graphqlOperation } from 'aws-amplify';
import { Organization, OrganizationTag, Tag } from '../API';
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

export async function createOrganization(organization: Omit<Organization, 'id' | '__typename' | 'createdAt' | 'updatedAt' | '_version' | '_lastChangedAt'>, tags?: Tag[]) {
  const newOrgData: any = await API.graphql(graphqlOperation(mutations.createOrganization, { input: { ...organization } }))
  const newOrg = newOrgData?.data.createOrganization as Organization

  // Create tags
  if (tags) {
    for (const tag of tags) {
      if (tag) {
        await API.graphql(graphqlOperation(mutations.createOrganizationTag, {
          input: {
            tagID: tag.id,
            organizationID: newOrg.id
          }
        }))
      }
    }
  }


  return newOrg
}

export async function deleteOrganization({ id }: Organization) {
  const newOrg = await API.graphql(graphqlOperation(mutations.deleteOrganization, { input: { id } }))
  return newOrg
}

export async function deleteOrganizationTag({ id }: OrganizationTag) {
  const newOrg = await API.graphql(graphqlOperation(mutations.deleteOrganizationTag, { input: { id } }))
  return newOrg
}

