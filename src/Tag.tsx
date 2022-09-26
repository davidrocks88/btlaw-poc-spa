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
    <div key={name} className={`cursor-pointer text-sm p-1 px-2 m-1 rounded-full inline hover:bg-gray-200 ${filters[name] ? 'bg-gray-300' : 'bg-gray-100'}`} onClick={click}>{name}</div>
  )
}