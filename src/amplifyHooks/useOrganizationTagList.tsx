/*eslint  @typescript-eslint/no-explicit-any: "off" */
import { useQuery } from '@tanstack/react-query'
import { API, graphqlOperation } from 'aws-amplify'
import { OrganizationTag } from '../API'
import * as queries from '../graphql/queries'

export function useOrganizationTagList() {
  const { isLoading, data, refetch } = useQuery<OrganizationTag[]>(
    ['organizationTagList', 'amplify'],
    async () => {
      const newOrgTag = await API.graphql<any>(
        graphqlOperation(queries.listOrganizationTags, { limit: 5000 }),
      )
      return newOrgTag.data.listOrganizationTags.items
    },
    {
      cacheTime: 0,
    },
  )

  return {
    isLoading,
    organizationTagList: data ?? [],
    refetch,
  }
}
