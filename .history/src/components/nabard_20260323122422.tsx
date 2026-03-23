'use client'
import React from 'react'
import Links from './presentation/links'
import SeeResume from './presentation/button-see-resume'
import LanguageToggle from './language-toggle'

const Navbard = () => {
  const [activeLink, setActiveLink] = React.useState<string | null>('About');

  const links = [
    {
      id: 1,
      name: "About",
    },
    {
      id: 2,
      name: "Experience",
    },
    {
      id: 3,
      name: "Projects",
    },
    {
      id: 4,
      name: "Contact",
    }
  ]

  return (
    <nav className='flex flex-col mt-16 hover:cursor-pointer'>
      <div className='flex  flex-col md:flex-row'>
        <section className='flex gap-3 flex-col'>
          {links.map((link) => (
            <Links 
              key={link.id} 
              name={link.name} 
              isActive={activeLink === link.name}
              onActivate={() => setActiveLink(link.name)}
            />
          ))}
        </section>
      </div>
    </nav>
  )
}

export default Navbard
