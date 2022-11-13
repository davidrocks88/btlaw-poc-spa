import {
  useQuery
} from '@tanstack/react-query'
import { API, graphqlOperation } from 'aws-amplify';
import { OrganizationTag } from '../API';
import * as queries from '../graphql/queries';


export function useOrganizationTagList() {
  const { isLoading, data, refetch } = useQuery<OrganizationTag[]>(['organizationTagList', 'amplify'], async () => {
    const newOrgTag = await API.graphql<any>(graphqlOperation(queries.listOrganizationTags))
    return newOrgTag.data.listOrganizationTags.items.filter((orgTag: OrganizationTag) => orgTag._deleted !== true)
  }, {
    cacheTime: 0
  })

  return {
    isLoading,
    organizationTagList: data ?? [],
    refetch
  }

}
