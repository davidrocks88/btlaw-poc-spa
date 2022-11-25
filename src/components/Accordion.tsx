/*eslint react/no-unknown-property: "off" */

import React, { useRef, useState } from 'react'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-400 ease')

  const contentSpace = useRef(null)

  function toggleAccordion() {
    setActive((prevState) => !prevState)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setRotate(active ? 'transform duration-400 ease' : 'transform duration-400 ease rotate-180')
  }

  return (
    <div className='flex flex-col'>
      <button
        className='py-2 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between'
        onClick={toggleAccordion}
      >
        <p className='inline-block text-footnote light'>{title}</p>
        <svg
          className={`${rotate} inline-block h-4 w-4`}
          xmlns='http://www.w3.org/2000/svg'
          width='512'
          height='298'
          shape-rendering='geometricPrecision'
          text-rendering='geometricPrecision'
          image-rendering='optimizeQuality'
          fill-rule='evenodd'
          clip-rule='evenodd'
          viewBox='0 0 512 298.04'
        >
          <path
            fill-rule='nonzero'
            d='M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z'
          ></path>
        </svg>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className='overflow-auto transition-max-height duration-700 ease-in-out'
      >
        <p className=' pb-10 pl-2 text-sm text-gray-500'>{content}</p>
      </div>
    </div>
  )
}
