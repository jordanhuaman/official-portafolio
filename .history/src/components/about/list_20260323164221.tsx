import React from 'react'

const List = ({ label }: { label: string }) => {
  return (
    <span className='inline-block px-3 py-1 tracking-wide text-[13px] text-[#55d2d4] bg-[#183656] rounded-xl'>
      {label}
    </span>
  )
}

export default List
