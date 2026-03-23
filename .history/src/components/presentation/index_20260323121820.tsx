"use client"
import React, { useEffect, useState } from 'react'
import Navbard from '../nabard'
import Main from './main'
import styles from "@/styles/presentation.module.css"
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

const PresentationView = () => {
  let { apper, mounted } = useIntersectionObserver({ observar: 'presentation' })
  return (
    <div id='presentation' className={`h-screen flex flex-col  ${apper ? styles.main : 'opacity-0'} pt-20`}>
      <Main />
    </div>
  )
}

export default PresentationView