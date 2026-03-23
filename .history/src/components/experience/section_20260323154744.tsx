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

  const job: Job[] = t("experience.job", { returnObjects: true }) as Job[];

  return (
    <div>
      <div>
        {job.map((job, index) => (
          <div
            key={index}
            className='flex flex-col'
          >
            <p>{job.start} - {job.end}</p>
            <div>
              <p>{job.position} - {job.company}</p>
              
            </div>
          </div>
        ))}
      </div>
      <section>View full sections</section>
    </div>
  )
}

export default Section