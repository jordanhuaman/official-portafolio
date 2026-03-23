"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'


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
    <div>
      <div>
        {jobs.map((job, index) => (
          <div
            key={index}
            className='flex flex-row gap-2'
          >
              <p>{job.start</p>
            <div className=''>
              <p>{job.position} - {job.company}</p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
      <section>View full sections</section>
    </div>
  )
}

export default Section