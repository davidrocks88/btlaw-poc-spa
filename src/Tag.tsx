import { useState } from "react"

export interface TagProps {
  name: string
  handleClick: (name: string, value: Boolean) => void
}

export function Tag({ name, handleClick }: TagProps) {
  const [isFiltered, setIsFiltered] = useState<Boolean>(false)

  function click() {
    console.log(`Setting tag=${name}, isFiltered from ${isFiltered} to ${!isFiltered}`)
    setIsFiltered(!isFiltered)
    handleClick(name, isFiltered)
  }

  const shouldHighlight = isFiltered

  return (
    <div className={`text-sm p-1 px-2 m-1 rounded-full inline-block hover:bg-gray-100 ${shouldHighlight ? 'bg-gray-200' : ''}`} onClick={click}>{name}</div>
  )
}