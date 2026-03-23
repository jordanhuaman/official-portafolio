"use client"
import React, { useState } from 'react'
import styles from '@/styles/hint.module.css'

const Hint = ({ children, label }: { children: React.ReactNode, label: string }) => {
  const [rendere, setRendered] = useState(false)

  return (
    <>
      <section
        onMouseEnter={() => setRendered(true)}
        onMouseLeave={() => setRendered(false)}
      >
        {children}
      </section>
      <section
        hidden={!rendere}
        className={`${styles.hint_text}`}
      >
        {label}
      </section>
    </>
  )
}

export default Hint