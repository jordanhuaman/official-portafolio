"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "@/styles/helpers.module.css"
import List from '../about/list'

type Job = {
  company: string;
  position: string;
  start: string;
  end: string;
  tasks: string[];
  stack: string[];
  description: string
}

const Section = () => {

  const { t } = useTranslation();

  const jobs: Job[] = t('experience.jobs', { returnObjects: true }) as Job[];


  return (
    <div className='flex  flex-col gap-4'>
      <p className=' text-white md:hidden inline-block p-3'>EXPERIENCES</p>
      <div>
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-10 justify-between rounded-md p-3 ${styles.section}`}
          >
            <p className={`shrink-0 text-sm tracking-wide opacity-55`}>{job.start} - {job.end}</p>
            <div className='flex flex-col gap-10 md:gap-4'>
              <h1 className='text-white text-[20px] font-semibold'>{job.position} - {job.company}</h1>
              <p className={`text-sm/6 leading-6 tracking-wider  opacity-55`}> {job.description}</p>
              <section className='flex flex-wrap gap-2'>
                {job.stack.map((s) => (
                  <List key={s} label={s} />
                ))}
              </section>
            </div>

          </div>
        ))}
      </div>
      <section className='p-3'>View full sections</section>
    </div>
  )
}

export default Section