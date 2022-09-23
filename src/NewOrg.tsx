import { useState } from "react";
import { useOrganizations } from "./Organization";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import _ from "lodash";

export function NewOrg() {
  const [name, setName] = useState("");
  const [orgUrl, setOrgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [trainingInformation, setTrainingInformation] = useState("");
  const [tags, setTags] = useState("");
  const [btContactName, setbtContactName] = useState("")
  const [volunteerUrl, setvolunteerUrl] = useState("")
  const [volunteerContactName, setvolunteerContactName] = useState("")
  const [volunteerContactPhone, setvolunteerContactPhone] = useState("")
  const [volunteerContactEmail, setvolunteerContactEmail] = useState("")
  const [areasServed, setAreasServed] = useState("")
  let navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    fetch('https://us-central1-btlaw-probono-poc.cloudfunctions.net/getOrganizations', {
      method: 'POST',
      body: JSON.stringify({
        name,
        orgUrl,
        description,
        trainingInformation,
        btContactName,
        volunteerUrl,
        volunteerContactName,
        volunteerContactEmail,
        volunteerContactPhone,
        areasServed,
        tags: tags.split(',').map(t => t.trim())
      }),
      mode: 'no-cors',
      headers: new Headers({ 'content-type': 'application/json' }),
    }).then(res => console.log(res)).then(a => navigate("../", { replace: true }))
  }

  const { data: organizations } = useOrganizations()
  const allTags: string[] = _.uniq(organizations?.map(o => o.tags).flat().map(t => _.startCase(t)))

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

  const redStar = <div className="inline text-red-500">*</div>

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col m-6">
        <div className='flex flex-row gap-6'>
          <label className="block text-gray-700 text-sm font-bold mb-2">Org Name{redStar}
            <input
              className="w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">Org URL
            <input
              className="w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              value={orgUrl}
              onChange={(e) => setOrgUrl(e.target.value)}
              required
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">Volunteer URL
            <input
              className="w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              value={volunteerUrl}
              onChange={(e) => setvolunteerUrl(e.target.value)}
            />
          </label>
        </div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Description{redStar}
          <input
            className="w-[64em] bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">Training Information
          <input
            className="w-[64em] bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="textarea"
            value={trainingInformation}
            onChange={(e) => setTrainingInformation(e.target.value)}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">Areas Served
          <input
            className="w-[64em] bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="textarea"
            value={areasServed}
            onChange={(e) => setAreasServed(e.target.value)}
          />
        </label>
        <hr className='my-4' />

        <div className="text-xl">{`B&T Contact`}</div>

        <div className='flex flex-row gap-6'>
          <label className="block text-gray-700 text-sm font-bold mb-2">{'B&T Contact Name'}
            <input
              className="w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              value={btContactName}
              onChange={(e) => setbtContactName(e.target.value)}
            />
          </label>
        </div>
        <hr className='my-4' />

        <div className="text-xl">{`Program Contact`}</div>
        <div className='flex flex-row gap-6'>

          <label className="block text-gray-700 text-sm font-bold mb-2">{'Program Contact Name'}
            <input
              className="w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              value={volunteerContactName}
              onChange={(e) => setvolunteerContactName(e.target.value)}
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">{'Program Contact Email'}
            <input
              className="w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              value={volunteerContactEmail}
              onChange={(e) => setvolunteerContactEmail(e.target.value)}
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">{'Program Contact Phone'}
            <input
              className="w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              value={volunteerContactPhone}
              onChange={(e) => setvolunteerContactPhone(e.target.value)}
            />
          </label>
        </div>
        <hr className='my-4' />
        <label className="block text-gray-700 text-sm font-bold mb-2">Tags, comma separated:
          <input
            className="min-w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>



        <div className="flex flex-row my-2">
          {allTags?.map(t => <div key={t} className="flex"><div className={`cursor-pointer text-sm p-1 px-2 m-1 rounded-full inline hover:bg-gray-100 bg-gray-200`} onClick={() => handleFilter(t, true)}>{t}</div></div>)}
        </div>

        <div className="flex flex-row gap-2">
          <a href='/'>
            <div className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
              Go Back
            </div>
          </a>

          <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type="submit" />
        </div>

      </div>
    </form>
  )
}