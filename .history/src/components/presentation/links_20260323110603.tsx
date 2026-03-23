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
      <a
        onClick={() => aboutView?.scrollIntoView({ behavior: "smooth" })}
        className={` font-semibold tracking-widest text-sm transition-all duration-150 cursor-pointer  ${styles.line}`}>
        <p>{name}</p>
      </a>
    </div>
  )
}

export default Links