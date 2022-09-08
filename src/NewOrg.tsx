import { useState } from "react";
import { useOrganizations } from "./Organization";
import { Tag } from "./Tag";
import { useNavigate } from "react-router-dom";

export function NewOrg() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    fetch('https://us-central1-btlaw-probono-poc.cloudfunctions.net/getOrganizations', {
      method: 'POST',
      body: JSON.stringify({
        name, description, tags: tags.split(',')
      }),
      mode: 'no-cors',
      headers: new Headers({ 'content-type': 'application/json' }),
    }).then(res => console.log(res)).then(a => navigate("../", { replace: true }))
  }

  const { data: organizations } = useOrganizations()
  const allTags = organizations?.map(o => o.tags).flat()

  function handleFilter(tagName: string, _: Boolean) {
    if (tags.trim().length === 0) {
      setTags(tagName)
      return
    }

    let currentTags = tags.trim().split(',')
    console.log(currentTags, tagName, currentTags.includes(tagName))

    if (currentTags.includes(tagName)) {
      currentTags = currentTags.filter(t => t !== tagName)
    } else {
      currentTags = [...currentTags, tagName]
    }
    console.log(currentTags)
    setTags(currentTags.join(','))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col m-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Org Name:
          <input
            className="w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">Description:
          <input
            className="w-[64em] bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">Tags, comma separated:
          <input
            className="w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
        <div className="flex flex-row">
          {allTags?.map(t => <div className="flex"><Tag name={t} handleClick={handleFilter} /></div>)}
        </div>
        <div className="flex flex-row gap-2">
          <a href='/'>
            <div className='flex justify-center align-middle flex-a w-32 h-8 rounded bg-red-100 hover:bg-white border-2 border-red-400 hover:border-red-300'>
              Go Back
            </div>
          </a>

          <input className='w-32 h-8 rounded bg-green-300 hover:bg-green-200 border-2 border-green-400 hover:border-green-300' type="submit" />
        </div>

      </div>
    </form>
  )
}