"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "@/styles/helpers.module.css"

type Job = {
  company: string;
  position: string;
  start: string;
  end: string;
  tasks: string[];
}

const Section = () => {

  const { t } = useTranslation();

  const jobs: Job[] = t('experience.jobs', { returnObjects: true }) as Job[];

  return (
    <div className='flex flex-col gap-4'>
      <div>
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`flex flex-row gap-10 justify-between rounded-md p-3 ${styles.section}`}
          >
            <p className={`flex-shrink-1 text-sm tracking-wide opacity-55`}>{job.start} - {job.end}</p>
            <div className=''>
              <h1 className='text-white text-[20px] font-semibold'>{job.position} - {job.company}</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique hic asperiores perferendis, amet labore, quisquam quo odio tenetur eius mollitia ducimus, quia quaerat vitae rem. Consequatur minima consequuntur quis necessitatibus.</p>
            </div>
          </div>
        ))}
      </div>
      <section>View full sections</section>
    </div>
  )
}

export default Section