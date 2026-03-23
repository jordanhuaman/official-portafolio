"use client"
import React, { useEffect, useRef } from 'react'
import styles from "@/styles/anchor.module.css"

const Links = ({ name }: { name: string }) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current = document.getElementById(name);
  }, [name]);

  return (
    <div className='relative'>
      <a
        onClick={() => ref.current?.scrollIntoView({ behavior: "smooth" })}
        className={`flex font-semibold tracking-widest text-sm transition-all duration-150 cursor-pointer ${styles.line}`}>
        <p>{name}</p>
      </a>
    </div>
  )
}

export default Links
