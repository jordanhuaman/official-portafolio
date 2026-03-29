"use client"
import React, { useEffect, useState } from 'react'
import List from './list'
import styles from "@/styles/presentation.module.css"
import TitleSection from '../title-section'
import { useTranslation } from 'react-i18next'

const InfoAbout = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const skills = ["Java", "Typescript", "Devopx", "Cloud"]

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`flex  flex-col gap-10 md:gap-2`}>
      <p className=' text-white md:hidden inline-block'>ABOUT</p>
      <section className='flex flex-col gap-4 tracking-wide  md:tracking-wide text-[15px] md:text-[17px] leading-relaxed'>
        <p className=' text-slate'>{t('about.about1')}</p>
        <p className='text-slate'>{t('about.about2')}</p>
        <p className=' text-slate'>{t('about.about3')}</p>
      </section>
      <section className='flex flex-wrap gap-2'>
        {skills.map((s) => (
          <List key={s} label={s} />
        ))}
      </section>
    </div>
  )
}

export default InfoAbout