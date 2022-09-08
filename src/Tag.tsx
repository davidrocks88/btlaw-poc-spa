export interface TagProps {
  name: string
}
export function Tag({name}: TagProps) {
  return (
    <div className="p-2 m-2 border-2 border-red-400 bg-red-300 rounded-lg inline">{name}</div>
  )
}