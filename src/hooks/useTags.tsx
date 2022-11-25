import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '../common'
import _ from 'lodash'

export function useTags() {
  // @ts-ignore
  const { data } = useQuery<string[]>(['tags'], async () => {
    const res = await fetch(`${BASE_URL}/tags`)
    const json = await res.json()
    return json
  })

  const filtered = data?.filter((s) => s.length > 0)
  const sorted = filtered?.sort((t1: string, t2: string) =>
    t1.trim().toLocaleLowerCase().localeCompare(t2.trim().toLocaleLowerCase()),
  )
  const tags = _.uniq(sorted)

  return {
    tags,
  }
}
