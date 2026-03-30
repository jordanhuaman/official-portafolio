import React, { useEffect, useState } from 'react'
import { IProyect } from '@/helper'
import Image from 'next/image'
import helper from '@/styles/helpers.module.css'
import List from '../about/list'
import { Github, SquareArrowOutUpRight } from 'lucide-react'


const Card = ({ proyect }: { proyect: IProyect }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`flex flex-col md:flex-row gap-5 md:gap-10 justify-between rounded-md p-3 ${helper.section} transition-opacity duration-300`}>
      <div className='shrink-0 h-[100px] w-[200px] p-1 rounded-md flex items-center justify-center'>
        <Image
          src={proyect.src}
          width={200}
          height={100}
          alt={proyect.title}
          className='rounded-md object-cover h-full w-auto'
        />
      </div>
      <div className='flex flex-col gap-3'>
        <section>
          <h1 className={`text-white font-semibold text-[18px] md:text-[20px] flex items-center gap-2`}>
            {proyect.title}
            {!proyect.finished && <span className={`w-2 h-2 rounded-full bg-yellow-400 ${helper.pulse} ${helper.shadow}`} />}
          </h1>
        </section>
        <p className='text-sm/6 leading-6 tracking-wider opacity-55 text-slate'>{proyect.description}</p>

        <div className='flex flex-wrap gap-2'>
          {proyect.stack.map((tech) => (
            <List key={tech} label={tech} />
          ))}
        </div>

        <div className='flex gap-2'>
          {proyect.github && (
            <a href={proyect.github} target='_blank' rel='noopener noreferrer'>
              <Github className='w-5 h-5 text-lightest_slate hover:text-green cursor-pointer transition-all duration-150' />
            </a>
          )}
          <SquareArrowOutUpRight className='w-5 h-5 text-lightest_slate hover:text-green cursor-pointer transition-all duration-150' />
        </div>
      </div>
    </div>
  )
}

export default Card