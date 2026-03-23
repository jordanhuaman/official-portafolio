"use client"
import React from 'react'
import TitleSection from '../title-section'
import WorkSections from './work-sections'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import styles from "@/styles/presentation.module.css"
import Section from './section'


const ExperienceView = () => {
  const { apper } = useIntersectionObserver({ observar: "Experience" })
  return (
    <div id='Experience' className={`mb-36 flex  scroll-mt-20 ${apper ? styles.main : "opacity-0"}`} >
      <Section />
    </div>
  )
}

export default ExperienceView