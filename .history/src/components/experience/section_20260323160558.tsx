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
            className='flex flex-row'
          >
            <div>
              <p>{job.start}</p>
              <p>{job.end}</p>
              </div>
            <div>
              <p>{job.position} - {job.company}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis deserunt perspiciatis delectus voluptatibus cupiditate laborum facilis, error consectetur inventore pariatur repellendus nostrum laudantium, ad nesciunt unde placeat rerum repellat repudiandae!</p>
            </div>
          </div>
        ))}
      </div>
      <section>View full sections</section>
    </div>
  )
}

export default Section