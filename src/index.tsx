import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { OrgEditor } from './OrgEditor';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className=''>
          <nav className="flex items-center justify-between flex-wrap bg-[#131829] p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <a href='https://btlaw.com' target='_blank' rel="noreferrer">
                <img className='h-8' src='https://btlaw.com/-/media/images/btlaw/site-logo/btlawlogo.ashx?h=69&w=411&la=en&hash=C3C4E5F6805DC4719AF72237AD0B82E1' />
              </a>
              <span className="ml-4 font-semibold text-xl tracking-tight">Pro Bono Finder</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                </a>
              </div>
              {/* <div>
                <Link to="newOrg"><div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Submit New Organization</div></Link>
              </div> */}
            </div>
          </nav>
          <Routes>
            <Route path="/">
              <Route index element={<App />} />
              <Route path="newOrg" element={<OrgEditor />} />
              <Route path="newOrg/:id" element={<OrgEditor />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
