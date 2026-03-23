
import React from 'react'
import Links from './presentation/links'
import SeeResume from './presentation/button-see-resume'
import LanguageToggle from './language-toggle'

const Navbard = () => {

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
      name: "Works",
    },
    {
      id: 4,
      name: "Contact",
    }
  ]

  return (
    <nav className='flex items-center gap-4 md:gap-0 md:items-baseline flex-col md:flex-row md:justify-between px-10 py-5 '>
      <div className='flex gap-4 md:gap-4 flex-col md:flex-row'>
        <section className='flex gap-3 items-center'>
          {links.map((link) => (
            <Links key={link.id} id={link.id} name={link.name} />
          ))}
        </section>
        <LanguageToggle />
        <SeeResume />
      </div>
    </nav>
  )
}

export default Navbard