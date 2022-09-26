import {
  useQuery
} from '@tanstack/react-query'
import { BASE_URL, IOrganization } from '../Organization'
import { v4 } from "uuid";

function getEmptyOrg(): IOrganization {
  return {
    id: v4(),
    name: '',
    description: '',
    tags: []
  }
}

export function useOrganization(id?: string) {
  const { isLoading, data } = useQuery<IOrganization>(['organizations', id], async () => {
    if (id) {
      const res = await fetch(`${BASE_URL}/organizations/${id}`, {
        mode: 'cors'
      })
      const json = await res.json()
      return json.Item
    } else {
      return getEmptyOrg()
    }
  })

  return {
    isLoading,
    organization: data ?? getEmptyOrg()
  }
}