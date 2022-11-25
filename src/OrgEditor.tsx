import { IOrganization } from './Organization'
import { useNavigate, useParams } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { v4 } from 'uuid'
import { useFormik } from 'formik'
import { useTags } from './hooks/useTags'
import { useOrganization } from './hooks/useOrganization'
import { BASE_URL, toTitleCase } from './common'
import { useState } from 'react'

export interface OrganizationFormProps {
  organization: IOrganization
}

export function OrgEditor() {
  const { id } = useParams()
  const { organization, isLoading } = useOrganization(id)
  if (isLoading) {
    console.log('loading')
    return <p>Loading...</p>
  } else {
    return <OrgEditorForm organization={organization} />
  }
}

function OrgEditorForm({ organization }: OrganizationFormProps) {
  const { tags } = useTags()
  const navigate = useNavigate()
  const [creatingTag, setCreatingTag] = useState(false)
  const [newTag, setNewTag] = useState('')
  const formik = useFormik<IOrganization>({
    initialValues: {
      ...organization,
      id: organization?.id ?? v4(),
      name: organization?.name ?? '',
      description: organization?.description ?? '',
      tags: organization?.tags ?? [],
    },
    onSubmit: (values) => {
      values.tags = values.tags.map((t) => toTitleCase(t))
      fetch(`${BASE_URL}/organizations`, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          ...values,
        }),
        headers: new Headers({ 'content-type': 'application/json' }),
      })
        .then((res) => console.log(res))
        .then((a) => navigate('../', { replace: true }))
    },
  })

  function deleteOrganization() {
    fetch(`${BASE_URL}/organizations/${organization.id}`, {
      method: 'DELETE',
    })
      .then((res) => console.log(res))
      .then((a) => navigate('../', { replace: true }))
  }

  const redStar = <div className='inline text-red-500'>*</div>

  const tagCSS = `cursor-pointer text-sm p-1 px-2 m-1 rounded-full inline hover:bg-gray-100 bg-gray-200`

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='flex flex-col m-6'>
        <div className='flex flex-row gap-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Org Name{redStar}
            <input
              className='w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
              type='text'
              value={formik.values.name}
              name='name'
              onChange={formik.handleChange}
              required
            />
          </label>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Org URL
            <input
              className='w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
              type='text'
              value={formik.values.orgUrl}
              name='orgUrl'
              onChange={formik.handleChange}
            />
          </label>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Volunteer URL
            <input
              className='w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
              type='text'
              value={formik.values.volunteerUrl}
              name='volunteerUrl'
              onChange={formik.handleChange}
            />
          </label>
        </div>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Description{redStar}
          <textarea
            className='w-[64em] bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal h-24'
            rows={6}
            value={formik.values.description}
            name='description'
            onChange={formik.handleChange}
          />
        </label>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Training Information
          <input
            className='w-[64em] bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
            type='textarea'
            value={formik.values.trainingInformation}
            name='trainingInformation'
            onChange={formik.handleChange}
          />
        </label>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Areas Served
          <input
            className='w-[64em] bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
            type='textarea'
            value={formik.values.areasServed}
            name='areasServed'
            onChange={formik.handleChange}
          />
        </label>
        <hr className='my-4' />

        <div className='text-xl'>{`B&T Contact`}</div>

        <div className='flex flex-row gap-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            {'B&T Contact Name'}
            <input
              className='w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
              type='text'
              value={formik.values.btContactName}
              name='btContactName'
              onChange={formik.handleChange}
            />
          </label>
        </div>
        <hr className='my-4' />

        <div className='text-xl'>{`Program Contact`}</div>
        <div className='flex flex-row gap-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            {'Program Contact Name'}
            <input
              className='w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
              type='text'
              value={formik.values.volunteerContactName}
              name='volunteerContactName'
              onChange={formik.handleChange}
            />
          </label>

          <label className='block text-gray-700 text-sm font-bold mb-2'>
            {'Program Contact Email'}
            <input
              className='w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
              type='text'
              value={formik.values.volunteerContactEmail}
              name='volunteerContactEmail'
              onChange={formik.handleChange}
            />
          </label>

          <label className='block text-gray-700 text-sm font-bold mb-2'>
            {'Program Contact Phone'}
            <input
              className='w-64 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
              type='text'
              value={formik.values.volunteerContactPhone}
              name='volunteerContactPhone'
              onChange={formik.handleChange}
            />
          </label>
        </div>
        <hr className='my-4' />
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Tags:
          <div className='my-2 flex flex-row flex-wrap gap-y-2 items-end align-middle content-center'>
            <div className={`border border-1 border-solid border-black ${tagCSS}`}>
              {creatingTag ? (
                <input
                  type='text'
                  className='bg-transparent'
                  onChange={(event) => setNewTag(event.target.value)}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      formik.setFieldValue('tags', [newTag, ...formik.values.tags])
                      setCreatingTag(false)
                      setNewTag('')
                    }
                  }}
                />
              ) : (
                <div onClick={() => setCreatingTag(true)}>
                  <b>+</b> New Tag...
                </div>
              )}
            </div>
            {formik.values.tags.map((t) => (
              <div key={t} className='flex'>
                <div
                  className={tagCSS}
                  onClick={() =>
                    formik.setFieldValue(
                      'tags',
                      formik.values.tags.filter((tag) => tag !== t),
                    )
                  }
                >
                  {t}
                </div>
              </div>
            ))}
          </div>
        </label>

        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Available Tags:
          <div className='my-2 flex flex-row flex-wrap gap-y-2 items-end align-middle content-center'>
            {tags.length &&
              tags
                .filter((t) => !formik.values.tags.includes(t))
                .map((t) => (
                  <div key={t} className='flex'>
                    <div
                      className={tagCSS}
                      onClick={() => formik.setFieldValue('tags', [...formik.values.tags, t])}
                    >
                      {t}
                    </div>
                  </div>
                ))}
          </div>
        </label>

        <div className='flex flex-row gap-2'>
          <a href='/'>
            <div className='text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
              Go Back
            </div>
          </a>

          <div
            onClick={deleteOrganization}
            className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
          >
            Delete
          </div>

          <input
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            type='submit'
          />
        </div>
      </div>
    </form>
  )
}
