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
        <p className='mb-[20px] text-slate'>Hi, I'm Jordan, I'm a bachelor in Systems Engineering and I love Software Development. My interest in Software Development started when I entered the university, i loved creating Software for my personal use, either on the web or native.</p>
        <p className='mb-[20px] text-slate'>Recently I am studying data structure and logarithms to have a better understanding of low level code.</p>
        <p className='mb-[20px] text-slate'>Here are a few technologies I’ve been working with recently:</p>
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