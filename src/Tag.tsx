import { useState } from "react"

export interface TagProps {
  name: string
  handleClick: (name: string, value: Boolean) => void
}

export function Tag({ name, handleClick }: TagProps) {
  const [isFiltered, setIsFiltered] = useState<Boolean>(true)

  function click() {
    setIsFiltered(!isFiltered)
    handleClick(name, isFiltered)
  }

  return (
    <div className={`p-2 m-2 border-2 border-sky-300 bg-sky-${isFiltered ? '200' : '100'} rounded-full inline`} onClick={click}>{name}</div>
  )
}