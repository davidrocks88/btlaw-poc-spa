import { useTags } from "./hooks/useTags"
import { useOrganizationList } from "./hooks/useOrganizationList"
import { useOrganizationList as useAmplifyOrganizationList } from "./amplifyHooks/useOrganizationList"
import { useTags as useAmplifyTags, createTag, deleteTag } from "./amplifyHooks/useTags"
import { createOrganization, deleteOrganization, deleteOrganizationTag } from "./amplifyHooks/useOrganization"
import { useOrganizationTagList } from "./amplifyHooks/useOrganizationTagList"
import { Tag } from "./API"

export function Migration() {
  const { tags } = useTags()
  const { organizations } = useOrganizationList()
  const { tags: amplifyTags } = useAmplifyTags()
  const { organizationList: amplifyOrganizationList } = useAmplifyOrganizationList()
  const { organizationTagList } = useOrganizationTagList()

  console.log({ organizationTagList, amplifyOrganizationList })

  async function migrateTags() {
    await Promise.all(tags.map(async legacyTag => {

      if (amplifyTags.find(tag => tag.name === legacyTag)) {
        console.log(`Already have legacy tag:`, legacyTag)
      } else {
        createTag(legacyTag)
      }
    }))
  }

  async function migrateOrganizations() {
    if (organizations) {
      await Promise.all(organizations.map(async legacyOrg => {
        if (amplifyOrganizationList?.find(org => org.name === legacyOrg.name || org.id === legacyOrg.id)) {
          console.log(`Already have legacy org:`, legacyOrg)
          return
        } else {
          console.log('creating org:', legacyOrg.name)

          const tagsToMigrate = await Promise.all(legacyOrg.tags.map(legacyTagName => amplifyTags.find(amplifyTag => amplifyTag.name === legacyTagName)))
          const input = {
            ...legacyOrg, tags: undefined, id: undefined
          }
          return await createOrganization({ ...input }, tagsToMigrate.filter(t => !!t) as Tag[])
        }



      }))
    }


    // for (const legacyOrg of organizations ?? []) {
    //   if (amplifyOrganizationList?.find(org => org.name === legacyOrg.name || org.id === legacyOrg.id)) {
    //     console.log(`Already have legacy org:`, legacyOrg)
    //   } else {
    //     const input = { ...legacyOrg, tags: undefined, id: undefined }
    //     await createOrganization({ ...input })
    //   }

    // }
  }

  function deleteAllOrganizations() {
    for (const org of amplifyOrganizationList ?? []) {
      deleteOrganization(org)
    }

    for (const orgTag of organizationTagList) {
      deleteOrganizationTag(orgTag)
    }
  }

  function deleteAllTags() {
    for (const tag of amplifyTags ?? []) {
      deleteTag(tag)
    }
  }

  return (
    <div className='flex flex-col'>
      <div>
        <button onClick={migrateTags} className="m-4 w-42 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Migrate Legacy to Amplify
        </button>
        <button onClick={deleteAllTags} className="m-4 w-42 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Delete all tags
        </button>
        <button onClick={migrateOrganizations} className="m-4 w-42 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Migrate Organizations
        </button>
        <button onClick={deleteAllOrganizations} className="m-4 w-42 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Delete All Organizations
        </button>
      </div>
      <div className='flex flex-row w-full'>
        <div>
          <div className="text-xl font-bold">Legacy Tags - Total: {tags.length}</div>
          <ol className="list-decimal pl-10">
            {tags.map(tag => <li className='font-mono' key={`tag-${tag}`}>{tag}</li>)}
          </ol>
        </div>
        <div>
          <div className="text-xl font-bold">Amplify Tags - Total: {amplifyTags.length}</div>
          <ol className="list-decimal pl-10">
            {amplifyTags.map(tag => <li onClick={() => deleteTag(tag)} className='font-mono' key={`amplify-tag-${tag.id}`}>{JSON.stringify({ id: tag.id, name: tag.name })}</li>)}
          </ol>
        </div>
        <span className='w-1 bg-blue-500 m-2' />
        <div>
          <div className="text-xl font-bold">Legacy Organizations - Total: {organizations?.length}</div>
          <ol className="list-decimal pl-10">
            {organizations?.sort((t1, t2) => t1.name.trim().toLocaleLowerCase().localeCompare(t2.name.trim().toLocaleLowerCase())).map(org => <li className='font-mono' key={`org-${org.name}`}>{org.name}</li>)}
          </ol>
        </div>
        <div>
          <div className="text-xl font-bold">Amplify Organizations - Total: {amplifyOrganizationList?.length}</div>
          <ol className="list-decimal pl-10">
            {amplifyOrganizationList?.map(org => <li className='font-mono' key={`amplify-org-${org.id}`}>{JSON.stringify({ id: org.id, name: org.name })}</li>)}
          </ol>
        </div>
      </div>
    </div>
  )
}