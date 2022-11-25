/*eslint  @typescript-eslint/no-explicit-any: "off" */
import { useQuery } from '@tanstack/react-query'
import { listTags } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import _ from 'lodash'
import { Tag } from '../API'
import * as mutations from '../graphql/mutations'
import { DEFAULT_QUERY_FILTER } from './common'

export function useTags() {
  // @ts-ignore
  const { data, refetch } = useQuery<Tag[]>(
    ['tags', 'amplify'],
    async () => {
      const tagsData = await API.graphql<any>(graphqlOperation(listTags, DEFAULT_QUERY_FILTER))
      return tagsData.data.listTags.items
    },
    {
      cacheTime: 0,
    },
  )

  const sorted = data?.sort((t1: Tag, t2: Tag) =>
    t1.name.trim().toLocaleLowerCase().localeCompare(t2.name.trim().toLocaleLowerCase()),
  )
  const tags = _.uniq(sorted)

  return {
    tags,
    refetch,
  }
}

export async function createTag(name: string) {
  const newTag = await API.graphql(graphqlOperation(mutations.createTag, { input: { name } }))
  return newTag as Tag
}

export async function deleteTag({ id }: Tag) {
  const newTag = await API.graphql(graphqlOperation(mutations.deleteTag, { input: { id } }))
  return newTag
}
