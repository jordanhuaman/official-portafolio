import React from 'react'
import helper from "@/styles/helpers.module.css"

const TitleSection = ({ sectionNumber, sectionTitle }: { sectionNumber: string, sectionTitle: string }) => {
  return (
    <section className='flex items-center gap-2'>
      <p className='text-primary font-ppB flex-shrink-0'>{sectionNumber}.</p>
      <h2 className={`font-ppSemiBold text-lightest_slate flex-shrink-0 ${helper.title_2}`}>{sectionTitle}</h2>
      <div className='h-[1px] bg-lightest_navy flex-1 min-w-[40px]' />
    </section>
  )
}

export default TitleSection
