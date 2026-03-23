import React from 'react'
import styles from "@/styles/helpers.module.css"
import { Github, Instagram, Linkedin, SquareArrowOutUpRight, Twitter } from 'lucide-react'


const InfoFixedLeft = () => {
  return (
    <div className={`hidden sm:block px-[10px]  ${styles.apper} px-10 `}>
        <section className='flex gap-5'>
          <a href="https://github.com/jordanhuaman?tab=repositories" target='_blank'><Github className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} /></a>
          <a href="https://www.instagram.com/jordanhuaman_g/" target='_blank'>
            <Instagram className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
          </a>
          <a href="https://x.com/alexand99723966" target='_blank'>
            <Twitter className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
          </a>
          <a href='https://www.linkedin.com/in/jordan-huaman-4992b8205/' target='_blank'>
            <Linkedin className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
          </a>
          <a href="https://official-portafolio.vercel.app/" target='_blank'>
            <SquareArrowOutUpRight className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
          </a>
        </section>
      </div>
  )
}

export default InfoFixedLeft