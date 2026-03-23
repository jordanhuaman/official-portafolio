"use client"
import React from 'react'
import TitleSection from '../title-section'
import WorkSections from './work-sections'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import styles from "@/styles/presentation.module.css"


const ExperienceView = () => {
  const { apper } = useIntersectionObserver({ observar: "Experience" })
  return (
    <div id='Experience' className={`mb-36 flex items-center justify-center scroll-mt-20 ${apper ? styles.main : "opacity-0"}`} >
      {/* <div className=''>
        <TitleSection sectionNumber='02' sectionTitle="Where I've work " />
        <WorkSections />
      </div> */}
      <div>
      <Section/>

      </div>
    </div>
  )
}

export default ExperienceView