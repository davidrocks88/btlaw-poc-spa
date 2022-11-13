import {
  useQuery
} from '@tanstack/react-query'
import { API, graphqlOperation } from 'aws-amplify';
import { Organization } from '../API';
import * as queries from '../graphql/queries';


export function useOrganizationList() {
  const { isLoading, data, refetch } = useQuery<Organization[]>(['organizationList', 'amplify'], async () => {
    const organisationListData = await API.graphql<any>(graphqlOperation(queries.listOrganizations))
    const organizationList = organisationListData.data.listOrganizations.items.filter((org: Organization) => org._deleted !== true)
    return organizationList
  },
    { cacheTime: 0 }
  )

  return {
    isLoading,
    organizationList: data,
    refetch
  }
}