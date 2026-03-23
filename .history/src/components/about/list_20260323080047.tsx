import React from 'react'
import helper from "@/styles/helpers.module.css"

const List = ({ label }: { label: string }) => {
  return (
    <div className='tracking-wide text-[#8e98a7] text-[13px]'>
      <p className={`${helper.il_triangle}`}>{label}</p>
    </div>
  )
}

export default List