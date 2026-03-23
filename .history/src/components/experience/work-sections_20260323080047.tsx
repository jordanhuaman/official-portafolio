'use client'
import React, { useState } from 'react'
import styles from "@/styles/experience.module.css"
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

const WorkSections = () => {
  const [currentId, setCurrentId] = useState(0)

  const workers = [
    { place: "Fis", workstation: "Enginner", date: "May 2022 - Decemmber 2023", id: 1 },
    { place: "Scout", workstation: "Soft Tecnical", date: "January 2023 - Until now", id: 2 },
    { place: "Fis", workstation: "Enginner", date: "May 2022 - Decemmber 2023", id: 3 },
    { place: "Fis", workstation: "Enginner", date: "May 2022 - Decemmber 2023", id: 4 },
    { place: "Fis", workstation: "Enginner", date: "May 2022 - Decemmber 2023", id: 5 },
  ]
  return (
    <div className='mt-[10px] flex'>
      <section className={`flex flex-col gap-1 relative ${styles.section_border}`}>
        {workers.map((wkds) => (
          <div
            key={wkds.id} className={` ${currentId + 1 === wkds.id ? styles.current_p : 'text-secundary'}`}
            onClick={() => setCurrentId(wkds.id - 1)}
          >
            <div className={`cursor-pointer hover:text-primary rounded-sm transition-all duration-[0.5s] hover:bg-[#102240] px-[30px] py-[6px] text-[14px] font-ppBold tracking-wide`} >{wkds.place}</div>
          </div>
        ))}
      </section>
      <section className='flex-1'>
        <h1>{workers[currentId+1].place }</h1>
      </section>
    </div>
  )
}

export default WorkSections