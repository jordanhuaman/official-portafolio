'use client'
import React from 'react'
import styles from "@/styles/anchor.module.css"

const Links = ({ name, isActive, onActivate }: { name: string; isActive: boolean; onActivate: () => void }) => {

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onActivate();
    
    const element = document.getElementById(name);
    console.log('Link clicked:', name, 'Element:', element);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`flex gap-3 items-center ${styles.activation} p-2 ${isActive ? styles.active : ''}`}
        onClick={handleClick}
  >
      <div className={styles.line}/>
      <button
        className={`flex font-semibold tracking-widest text-sm transition-all duration-150 cursor-pointer`}>
        {name}
      </button>
    </div>
  )
}

export default Links
