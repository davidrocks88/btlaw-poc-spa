import {
  useQuery
} from '@tanstack/react-query'
import { API, graphqlOperation } from 'aws-amplify';
import { Organization } from '../API';
import * as queries from '../graphql/queries';
import { useOrganizationTagList } from './useOrganizationTagList';


export function useOrganizationList() {
  const { isLoading, data, refetch } = useQuery<Organization[]>(['organizationList', 'amplify'], async () => {
    const organisationListData = await API.graphql<any>(graphqlOperation(queries.listOrganizations))
    const organizationList = organisationListData.data.listOrganizations.items.filter((org: Organization) => org._deleted !== true)
    return organizationList
  },
    { cacheTime: 0 }
  )

  const { isLoading: organizationTagListLoading, organizationTagList, refetch: refetchOrganizationTagList } = useOrganizationTagList()

  if (!isLoading && !organizationTagListLoading && data && organizationTagList) {
    data.forEach(org => {
      org.Tags = {
        __typename: "ModelOrganizationTagConnection",
        items: [
          ...organizationTagList.filter(orgTag => orgTag.organizationID === org.id)
        ]
      }
    })
  }

  return {
    isLoading: isLoading && organizationTagListLoading,
    organizationList: (data ?? []).sort((t1, t2) => t1.name.trim().toLocaleLowerCase().localeCompare(t2.name.trim().toLocaleLowerCase())),
    refetch: () => {
      refetchOrganizationTagList()
      refetch()
    }
  }
}