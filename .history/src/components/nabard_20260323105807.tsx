
import React from 'react'
import Links from './presentation/links'
import SeeResume from './presentation/button-see-resume'
import LanguageToggle from './language-toggle'

const Navbard = () => {

  const links = [
    {
      id: 1,
      name: "ABOUT",
    },
    {
      id: 2,
      name: "EXPERIENCE",
    },
    {
      id: 3,
      name: "WORKS",
    },
    {
      id: 4,
      name: "CONTACT",
    }
  ]

  return (
    <nav className='flex items-center flex-col mt-16'>
      <div className='flex  flex-col md:flex-row'>
        <section className='flex gap-3 flex-col'>
          {links.map((link) => (
            <Links key={link.id} id={link.id} name={link.name} />
          ))}
        </section>
      </div>
    </nav>
  )
}

export default Navbard