import React from 'react'
import helper from "@/styles/helpers.module.css"

const List = ({ label }: { label: string }) => {
  return (
    <div className='tracking-wide text-[#55d2d4] text-[13px] bg-[#183656] rounded-sm'>
      <p>{label}</p>
    </div>
  )
}

export default List