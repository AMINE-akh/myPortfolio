/* eslint-disable react/prop-types */
const Tag = ({name}) => {
  return (
    <div className="text-neutral-200 px-3 py-1 bg-white/5 border-neutral-600 hover:border-orange-600 hover:cursor-default border rounded text-sm transition-all">{name}</div>
  )
}

export default Tag