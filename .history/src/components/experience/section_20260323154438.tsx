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
      
    </div>
  )
}

export default Section