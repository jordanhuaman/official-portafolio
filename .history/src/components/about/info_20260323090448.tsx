"use client"
import React from 'react'
import List from './list'
import styles from "@/styles/presentation.module.css"
import TitleSection from '../title-section'

const InfoAbout = () => {


  const skills = ["Javascipt (ES6+)", "Typescript", "React (Nextjs)", "Node.js", "Java", "Logarithms", "Linux", "DevOps+-"]

  return (
    <div className={`flex md:w-[60%] flex-col gap-2`}>
      <TitleSection sectionNumber='01' sectionTitle='About me' />
      <section>
        <p className='mb-[20px] text-slate'></p>
        <p className='mb-[20px] text-slate'></p>
        <p className='mb-[20px] text-slate'></p>
      </section>
      <section className='grid grid-cols-2 gap-2'>
        {skills.map((s) => (
          <List key={s} label={s} />
        ))}
      </section>
    </div>
  )
}

export default InfoAbout