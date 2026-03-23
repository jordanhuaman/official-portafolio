"use client"
import React from 'react'
import List from './list'
import styles from "@/styles/presentation.module.css"
import TitleSection from '../title-section'
import { useTranslation } from 'react-i18next'

const InfoAbout = () => {

  const { t } = useTranslation();
  const skills = ["Javascipt (ES6+)", "Typescript", "React (Nextjs)", "Node.js", "Java", "Logarithms", "Linux", "DevOps+-"]

  return (
    <div className={`flex md:w-[60%] flex-col gap-2`}>
      <section>
        <p className='mb-[20px] text-slate'>{t('about.about1')}</p>
        <p className='mb-[20px] text-slate'>{t('about.about2')}</p>
        <p className='mb-[20px] text-slate'>{t('about.about3')}</p>
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