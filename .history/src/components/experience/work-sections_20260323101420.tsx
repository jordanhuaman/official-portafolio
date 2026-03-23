'use client'
import React, { useState } from 'react'
import styles from "@/styles/experience.module.css"
import { PlayCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type Job = {
  company: string;
  position: string;
  start: string;
  end: string;
  tasks: string[];
}

const WorkSections = () => {
  const { t } = useTranslation();
  const [currentId, setCurrentId] = useState(0)

  const jobs: Job[] = t('experience.jobs', { returnObjects: true }) as Job[];

  const currentJob = jobs[currentId];

  return (
    <div className='mt-[10px] flex gap-20'>
      <section className={`flex flex-col gap-1 relative ${styles.section_border} `}>
        {jobs.map((job, index) => (
          <div
            key={index}
            className={` ${currentId === index ? styles.current_p : 'text-secundary'}`}
            onClick={() => setCurrentId(index)}
          >
            <div className={`cursor-pointer hover:text-primary rounded-sm transition-all duration-[0.5s]  px-[30px] py-[6px] text-[14px] tracking-wide`}>
              {job.company}
            </div>
          </div>
        ))}
      </section>
      <section className='flex-1'>
        <h3 className='text-lightest_slate text-[22px] font-ppSemiBold mb-1'>
          {currentJob.position} <span className='text-primary'>@{currentJob.company}</span>
        </h3>
        <p className='text-[15px]'>
          {currentJob.start} - {currentJob.end}
        </p>
        <ul className='flex flex-col gap-2'>
          {currentJob.tasks.map((task, index) => (
            <li key={index} className='text-slate text-[14px] flex items-start gap-5'>
              <PlayCircle className='w-4 h-4 text-primary mt-1 flex-shrink-0' />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default WorkSections
