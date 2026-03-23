"use client"
import React from 'react'
import TitleSection from '../title-section'
import styles from "@/styles/proyects.module.css"
import mainS from '@/styles/presentation.module.css'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import FlexProyects from './flex-proyects'
const ProyectsView = () => {

  const { apper } = useIntersectionObserver({ observar: "Projects" })

  return (
    <div id='Projects' className={`flex flex-col md:flex-row justify-center gap-3 scroll-mt-20 ${apper ? mainS.main : 'opacity-0'}`}>
      <p className=' text-white md:hidden inline-block'>PROJECTS</p>
      <div className={`gap-3 flex flex-col`}>
        <FlexProyects />
      </div>
    </div>
  )
}

export default ProyectsView