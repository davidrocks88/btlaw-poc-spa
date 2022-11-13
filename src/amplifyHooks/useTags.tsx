import {
  useQuery
} from '@tanstack/react-query'
import { listTags } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify';
import _ from "lodash"
import { Tag } from '../API';
import * as mutations from '../graphql/mutations';


export function useTags() {
  // @ts-ignore
  const { data, refetch } = useQuery<Tag[]>(['tags', 'amplify'], async () => {
    const tagsData = await API.graphql<any>(graphqlOperation(listTags))
    const tags = tagsData.data.listTags.items.filter((tag: Tag) => tag._deleted !== true)
    return tags
  }, {
    cacheTime: 0
  })

  const sorted = data?.sort((t1: Tag, t2: Tag) => t1.name.trim().toLocaleLowerCase().localeCompare(t2.name.trim().toLocaleLowerCase()))
  const tags = _.uniq(sorted)

  return {
    tags,
    refetch
  }
}

export async function createTag(name: string) {
  const newTag = await API.graphql(graphqlOperation(mutations.createTag, { input: { name } }))
  return newTag as Tag
}