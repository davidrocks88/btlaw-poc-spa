export interface TagProps {
  name: string
  handleClick: (name: string, value: Boolean) => void
  filters?: any
}

export function Tag({ name, handleClick, filters }: TagProps) {
  function click() {
    handleClick(name, !filters[name])
  }

  return (
    <div className={`cursor-pointer text-sm p-1 px-2 m-1 rounded-full inline hover:bg-gray-100 ${filters[name] ? 'bg-gray-200' : ''}`} onClick={click}>{name}</div>
  )
}