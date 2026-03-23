import React from 'react'
import helper from "@/styles/helpers.module.css"

const TitleSection = ({ sectionNumber, sectionTitle }: { sectionNumber: string, sectionTitle: string }) => {
  return (
    <section className='flex flex-row  gap-2'>
      <p className='text-primary font-ppB flex items-center'>{sectionNumber}.</p>
      <div className='flex flex-row  flex-1 itmes-center gap-3'>
        <p className={`font-ppSemiBold text-lightest_slate ${helper.title_2}`}>{sectionTitle}</p>
        <div className="h-full w-full flex-1 flex items-center justify-start">
          <div className='bg-lightest_navy h-[1px] flex-1 min-w-[40px] w-auto max-w-[200px]' />
        </div>
      </div>
    </section>
  )
}

export default TitleSection