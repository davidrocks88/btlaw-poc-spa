import { Tag as TagModel } from './API'

export interface TagProps {
  tag: TagModel
  handleClick: (tag: TagModel, value: boolean) => void
  filters?: { [tagID: string]: boolean }
}

export function Tag({ tag, handleClick, filters = {} }: TagProps) {
  function click() {
    handleClick(tag, !filters[tag.id])
  }

  return (
    <div
      key={tag.name}
      className={`cursor-pointer text-sm p-1 px-2 m-1 rounded-full inline hover:bg-gray-300 ${filters[tag.id] ? 'bg-gray-400' : 'bg-gray-200'
        }`}
      onClick={click}
    >
      {tag.name}
    </div>
  )
}
