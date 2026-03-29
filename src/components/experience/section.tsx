"use client"
import React, { useEffect, useState } from 'react'
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
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const jobs: Job[] = mounted ? t('experience.jobs', { returnObjects: true }) as Job[] : [];


  return (
    <div className='flex  flex-col gap-4'>
      <p className=' text-white md:hidden inline-block p-3'>EXPERIENCES</p>
      <div>
        {jobs.map((job, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex flex-col md:flex-row gap-5 md:gap-10 justify-between rounded-md p-3 ${styles.section} transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-40' : 'opacity-100'}`}
          >
            <p className={`shrink-0 text-sm tracking-wide opacity-55`}>{job.start} - {job.end}</p>
            <div className='flex flex-col gap-4'>
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
      <a href="/Jordan Alexander Huaman Guizgueta-cv.pdf" target="_blank" rel="noopener noreferrer" className='p-3 hover:text-primary transition-colors cursor-pointer'>View full sections</a>
    </div>
  )
}

export default Section