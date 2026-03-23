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
    <div id='Projects' className={`flex justify-center items-center scroll-mt-20 ${apper ? mainS.main : 'opacity-0'}`}>
      <div className={`gap-3 flex flex-col`}>
        <FlexProyects />
      </div>
    </div>
  )
}

export default ProyectsView