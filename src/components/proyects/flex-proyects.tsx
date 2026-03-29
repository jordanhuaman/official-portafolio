import proyects from '@/helper'
import React, { useEffect, useState } from 'react'
import Card from './card';

const FlexProyects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const loadedProyects = proyects;
  return (
    <div className=' flex flex-col gap-4 max-w-[1000px]'>
      {loadedProyects.map((proyect, index) => (
        <div
          key={proyect.id}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-40' : 'opacity-100'}`}
        >
          <Card proyect={proyect} />
        </div>
      ))}
    </div>
  )
}

export default FlexProyects