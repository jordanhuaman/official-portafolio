'use client'
import React from 'react'
import styles from "@/styles/anchor.module.css"
import { useScrollContainer } from '../scroll-context'

const Links = ({ name }: { name: string }) => {
  const scrollRef = useScrollContainer();

  const handleClick = () => {
    const element = document.getElementById(name);
    if (element && scrollRef?.current) {
      scrollRef.current.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <div className={styles.line}/>
      <a
        onClick={handleClick}
        className={`flex font-semibold tracking-widest text-sm transition-all duration-150 cursor-pointer`}>
        <p>{name}</p>
      </a>
    </div>
  )
}

export default Links
