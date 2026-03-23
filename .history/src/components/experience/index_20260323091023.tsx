"use client"
import React from 'react'
import TitleSection from '../title-section'
import WorkSections from './work-sections'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import styles from "@/styles/presentation.module.css"


const ExperienceView = () => {
  const { apper } = useIntersectionObserver({ observar: "Experience" })

  return (
    <div>
      <div id='Experience' className={`h-screen flex items-center justify-center ${apper ? styles.main : "opacity-0"}`} >
        <div className='w-[80%] md:w-[50%]'>
          <TitleSection sectionNumber='02.' sectionTitle="Where I've work " />
          <h1 className='text-font-ppSemiBold text-center text-[30px]'>Comming soon...</h1>
        </div>
      </div>
    </div>
  )
  return (
    <div id='Experience' className={`h-screen flex items-center justify-center ${apper ? styles.main : "opacity-0"}`} >
      <div className='w-[80%] md:w-[50%]'>
        <TitleSection sectionNumber='02.' sectionTitle="Where I've work " />
        <WorkSections />
      </div>
    </div>
  )
}

export default ExperienceView