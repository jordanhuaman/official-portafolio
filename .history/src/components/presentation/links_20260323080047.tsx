"use client"
import React, { useEffect, useState } from 'react'
import styles from "@/styles/anchor.module.css"
import Hint from '../hint'

const Links = ({ name, id }: { name: string, id: number }) => {
  const [monted, setMounted] = useState(false)
  let aboutView = null;

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!monted) return <div>loading</div>
  else {
    aboutView = document.getElementById(name)
  }
  return (
    <div className='relative'>
      <Hint label={name}>
        <a
          onClick={() => aboutView?.scrollIntoView({ behavior: "smooth" })}
          className={`flex font-ppELight text-[12px] opacity-[0.7] tracking-wider hover:opacity-[1] transition-all duration-150 cursor-pointer  ${styles.line}`}>
          <p className='text-[var(--text-primary)] font-ppBold'>0{id}.</p>
          <p>{name}</p>
        </a>
      </Hint>
    </div>
  )
}

export default Links