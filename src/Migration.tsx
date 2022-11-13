import { useTags } from "./hooks/useTags"
import { useOrganizationList } from "./hooks/useOrganizationList"
import { useOrganizationList as useAmplifyOrganizationList } from "./amplifyHooks/useOrganizationList"
import { useTags as useAmplifyTags, createTag } from "./amplifyHooks/useTags"
import { createOrganization, deleteOrganization, createOrganizationTag } from "./amplifyHooks/useOrganization"
export function Migration() {
  const { tags } = useTags()
  const { organizations } = useOrganizationList()
  const { tags: amplifyTags, refetch } = useAmplifyTags()
  const { organizationList: amplifyOrganizationList, refetch: refetchOrgs } = useAmplifyOrganizationList()
  console.log(amplifyOrganizationList)
  function migrateTags() {
    for (const legacyTag of tags) {
      if (amplifyTags.find(tag => tag.name === legacyTag)) {
        console.log(`Already have legacy tag:`, legacyTag)
      } else {
        createTag(legacyTag)
      }

    }
  }

  async function migrateOrganizations() {
    for (const legacyOrg of organizations ?? []) {
      if (amplifyOrganizationList?.find(org => org.name === legacyOrg.name || org.id === legacyOrg.id)) {
        console.log(`Already have legacy org:`, legacyOrg)
      } else {
        const input = { ...legacyOrg, tags: undefined, id: undefined }
        const newOrg = await createOrganization({ ...input })

        for (const legacyTag of legacyOrg.tags) {
          const amplifyTag = amplifyTags.find(t => t.name === legacyTag)
          if (amplifyTag) {
            createOrganizationTag(newOrg.id, amplifyTag.id)
          }
        }
      }

    }
  }

  function deleteAllOrganizations() {
    for (const org of amplifyOrganizationList ?? []) {
      deleteOrganization(org)
    }
  }

  function useCreateRandomTag() {
    createTag(`${Math.random()}`)
    refetch()
  }

  return (
    <div className='flex flex-col'>
      <div>
        <button onClick={migrateTags} className="m-4 w-42 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Migrate Legacy to Amplify
        </button>
        <button onClick={useCreateRandomTag} className="m-4 w-42 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create random amplify tag
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
            {amplifyTags.map(tag => <li className='font-mono' key={`amplify-tag-${tag.id}`}>{JSON.stringify({ id: tag.id, name: tag.name })}</li>)}
          </ol>
        </div>
        <span className='w-1 bg-blue-500 m-2' />
        <div>
          <div className="text-xl font-bold">Legacy Organizations - Total: {organizations?.length}</div>
          <ol className="list-decimal pl-10">
            {organizations?.map(org => <li className='font-mono' key={`org-${org.name}`}>{org.name}</li>)}
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