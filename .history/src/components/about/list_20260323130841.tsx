import React from 'react'
import helper from "@/styles/helpers.module.css"

const List = ({ label }: { label: string }) => {
  return (
    <div className='tracking-wide text-[#55d2d4] text-[13px] bg-[#183656]'>
      <p className={`${helper.il_triangle}`}>{label}</p>
    </div>
  )
}

export default List