'use client'
import React from 'react'
import styles from "@/styles/anchor.module.css"
import { useScrollContainer } from '../scroll-context'

const Links = ({ name, isActive, onActivate }: { name: string; isActive: boolean; onActivate: () => void }) => {
  const scrollRef = useScrollContainer();

  const handleClick = () => {
    onActivate();
    const element = document.getElementById(name);
    if (element && scrollRef?.current) {
      scrollRef.current.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`flex gap-3 items-center ${styles.activation} p-2 ${isActive ? styles.active : ''}`}>
      <div className={styles.line}/>
      <a
        onClick={handleClick}
        className={`flex font-semibold tracking-wide text-sm transition-all duration-150 cursor-pointer`}>
        <p>{name}</p>
      </a>
    </div>
  )
}

export default Links
