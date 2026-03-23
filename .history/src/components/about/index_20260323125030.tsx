"use client"
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import InfoAbout from './info'
import Image from 'next/image'
import styles from "@/styles/presentation.module.css"
import helper from "@/styles/helpers.module.css"

const AboutView = () => {

  let { apper } = useIntersectionObserver({ observar: 'About' })


  return (
    <div id='About' className={`h-screen flex justify-center items-center ${apper ? styles.main : "opacity-0"}`}>
      <div hidden className={`gap-3 flex flex-col md:flex-row`}>
        <InfoAbout />
        <div className='flex justify-center items-center ml-[20px] flex-1 bg-main'>
        </div>
      </div>
    </div>
  )
}

export default AboutView