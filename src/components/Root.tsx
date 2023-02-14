import '../index.css'
import { App } from '../App'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { OrgEditor, Migration } from '../components'
import { Test } from '../Test'

import '@aws-amplify/ui-react/styles.css'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react'
import { useIsAdmin, useIsLoggedIn } from '../authHooks'

const queryClient = new QueryClient()

function Root() {
  const [showAuthenticator, setShowAuthenticator] = useState(false)
  const isLoggedIn = useIsLoggedIn()
  const isAdmin = useIsAdmin()
  const { signOut } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    setShowAuthenticator(false)
  }, [isLoggedIn])

  return (<QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className=''>
        <meta httpEquiv="refresh" content="0;URL='https://btlaw-pro-bono.vercel.app/'" />
        <nav className='flex items-center justify-between flex-wrap bg-[#131829] p-6'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <a href='https://btlaw.com' target='_blank' rel='noreferrer'>
              <img
                alt='btlaw icon'
                className='h-8'
                src='https://btlaw.com/-/media/images/btlaw/site-logo/btlawlogo.ashx?h=69&w=411&la=en&hash=C3C4E5F6805DC4719AF72237AD0B82E1'
              />
            </a>
            <span className='ml-4 font-semibold text-xl tracking-tight'>Pro Bono Finder™</span>
          </div>
          <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <div className='text-sm lg:flex-grow'>
              <a
                href='#responsive-header'
                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
              >
                {''}
              </a>
            </div>
            {isAdmin && (
              <div>
                <Link to='newOrg'>
                  <div className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>
                    Submit New Organization
                  </div>
                </Link>
              </div>
            )}
            <div className='flex gap-2'>
              {!isLoggedIn && <div onClick={() => setShowAuthenticator(true)} className='cursor-pointer inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>
                Sign in
              </div>}
              {isLoggedIn && <div onClick={() => signOut()} className='cursor-pointer inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>
                Sign Out
              </div>}
              <a
                href='mailto:jason.bernstein@btlaw.com?Subject=Pro Bono Finder Feedback'
                target='_blank'
                rel='noreferrer'
              >
                <div className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>
                  Give Us Feedback
                </div>
              </a>
            </div>
          </div>
        </nav>
        {showAuthenticator && <Authenticator />}
        <Routes>
          <Route path='/'>
            <Route index element={<App />} />
            <Route path='newOrg' element={<OrgEditor />} />
            <Route path='newOrg/:id' element={<OrgEditor />} />
            <Route path='migration' element={<Migration />} />
            <Route path='test' element={<Test />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  </QueryClientProvider>)
}

export default Root
