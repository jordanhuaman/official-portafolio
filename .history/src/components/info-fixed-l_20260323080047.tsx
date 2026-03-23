import React from 'react'
import styles from "@/styles/helpers.module.css"
import { Github, Instagram, Linkedin, SquareArrowOutUpRight, Twitter } from 'lucide-react'


const InfoFixedLeft = () => {
  return (
    <div className={`fixed bottom-0 left-0 hidden sm:block px-[10px]  ${styles.apper}`}>
      <div className='flex flex-col items-center gap-2 h-full px-3'>
        <section className='flex gap-3 flex-col'>
          <a href="https://github.com/orgs/devops-jordan/repositories" target='_blank'><Github className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} /></a>
          <a href="https://www.instagram.com/jordanhuaman_g/" target='_blank'>
            <Instagram className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
          </a>
          <a href="https://x.com/alexand99723966" target='_blank'>
            <Twitter className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
          </a>
          <a href='https://www.linkedin.com/in/alexander-huaman-4992b8205/' target='_blank'>
            <Linkedin className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
          </a>
          <a href="https://official-portafolio.vercel.app/" target='_blank'>
            <SquareArrowOutUpRight className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
          </a>
        </section>
        <div className='bg-light_slate w-[2px] h-[200px]' />
      </div>
    </div>
  )
}

export default InfoFixedLeft