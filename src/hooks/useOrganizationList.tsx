import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '../common'
import { IOrganization } from '../components'

export function useOrganizationList() {
  const { isLoading, data } = useQuery<IOrganization[]>(['organizations'], async () => {
    const res = await fetch(`${BASE_URL}/organizations`)
    const json = await res.json()
    return json
  })

  return {
    organizations: data,
    isLoading,
  }
}
