import {
  useQuery
} from '@tanstack/react-query'
import { API, graphqlOperation } from 'aws-amplify';
import { Organization } from '../API';
import * as queries from '../graphql/queries';
import { DEFAULT_QUERY_FILTER } from './common';
import { useOrganizationTagList } from './useOrganizationTagList';


export function useOrganizationList() {
  const { isLoading, data, refetch } = useQuery<Organization[]>(['organizationList', 'amplify'], async () => {
    const organisationListData = await API.graphql<any>(graphqlOperation(queries.listOrganizations, DEFAULT_QUERY_FILTER))
    const organizationList = organisationListData.data.listOrganizations.items
    return organizationList
  },
    { cacheTime: 0 }
  )

  const { isLoading: organizationTagListLoading, organizationTagList, refetch: refetchOrganizationTagList } = useOrganizationTagList()
  console.log('in query', { organizationTagList })

  if (!isLoading && !organizationTagListLoading && data && organizationTagList) {
    data.forEach(org => {
      console.log("looking for tags for org: ", org, organizationTagList.filter(orgTag => orgTag.organizationID == org.id))
      org.tags = {
        __typename: "ModelOrganizationTagConnection",
        items: [
          ...organizationTagList.filter(orgTag => orgTag.organizationID === org.id)
        ]
      }
    })
  }

  console.log({ data })

  return {
    isLoading: isLoading && organizationTagListLoading,
    organizationList: (data ?? []).sort((t1, t2) => t1.name.trim().toLocaleLowerCase().localeCompare(t2.name.trim().toLocaleLowerCase())),
    refetch: () => {
      refetchOrganizationTagList()
      refetch()
    }
  }
}