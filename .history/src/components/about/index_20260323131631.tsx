"use client"
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import InfoAbout from './info'
import Image from 'next/image'
import styles from "@/styles/presentation.module.css"
import helper from "@/styles/helpers.module.css"

const AboutView = () => {

  let { apper } = useIntersectionObserver({ observar: 'About' })


  return (
    <div id='About' className={` mb-36 ${apper ? styles.main : "opacity-0"}`}>
      <InfoAbout />
    </div>
  )
}

export default AboutView