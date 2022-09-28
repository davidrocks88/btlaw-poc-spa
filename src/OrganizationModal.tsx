/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IOrganization } from './Organization'
import { Accordion } from './Accordion'
import EditIcon from "./edit-button-svgrepo-com.svg"

export interface OrganizationModalProps {
  organization: IOrganization
  hideModal: () => void
}

interface IReview {
  content: string
}

function Review({ content }: IReview) {
  return (<figure className="max-w-screen-md">
    <div className="flex items-center mb-4 text-yellow-300">
      <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    </div>
    <blockquote>
      <p className="text-sm font-semibold text-gray-900">{content}</p>
    </blockquote>
    <figcaption className="flex items-center mt-6 space-x-3">
      <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
      <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
        <cite className="pr-3 font-medium text-gray-900 dark:text-white">Jane Doe</cite>
        <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{"B&T Employee"}</cite>
      </div>
    </figcaption>
  </figure>)
}

export default function OrganizationModal({ organization, hideModal }: OrganizationModalProps) {
  const [open, setOpenAggregate] = useState(true)
  const cancelButtonRef = useRef(null)

  function setOpen(isOpen: boolean) {
    setOpenAggregate(isOpen)
    if (isOpen === false) {
      hideModal()
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                  <div className="sm:flex sm:items-star w-full">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className='flex justify-between'>
                        <a href={`https://${organization.orgUrl}`} target='_blank' rel="noreferrer"><div className="font-semibold text-xl mb-2 underline hover:text-blue-600">{organization.name}</div></a>
                        <code
                          className="text-sm hover:font-bold cursor-pointer"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          x
                        </code>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {organization.description}
                        </p>
                        <Accordion title="Training Information" content={organization.trainingInformation ?? `Something about traning information for ${organization.name}`} />
                        <Accordion title="Areas Served" content={organization.areasServed ?? `List of areas served for ${organization.name}`} />
                        <Accordion title="Contact Information" content={<>
                          <div>{"B&T Contact Information: " + organization.btContactName}</div>
                          <a target="_blank" href={`mailto://${organization.volunteerContactEmail}`} rel="noreferrer"><div>{organization.name + " Contact: " + organization.volunteerContactName} - {organization.volunteerContactPhone}, {organization.volunteerContactEmail}</div></a>
                        </>} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex justify-between sm:px-6 items-center">
                  {/* <a href={`/newOrg/${organization.id}`}>
                    <img className='h-10 cursor-pointer hover:bg-gray-300 p-2 rounded' src={EditIcon} alt="React Logo" /></a> */}

                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Find Current Opportunities
                  </button>

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root >
  )
}