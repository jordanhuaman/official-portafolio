'use client'
import React, { useEffect } from 'react'
import Links from './presentation/links'
import SeeResume from './presentation/button-see-resume'
import LanguageToggle from './language-toggle'

const Navbard = () => {
  const [activeLink, setActiveLink] = React.useState<string>('About');

  const links = [
    { id: 1, name: "About" },
    { id: 2, name: "Experience" },
    { id: 3, name: "Projects" },
  ]

  useEffect(() => {
    const sections = links.map(link => document.getElementById(link.name));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className='flex flex-col mt-16'>
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
