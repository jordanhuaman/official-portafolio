import React from 'react'
import styles from "@/styles/letteranimaiton.module.css"
import helpers from "@/styles/helpers.module.css"

const Main = () => {
  const loadInfo = 'Hi,  my name is';
  return (
    <div className="flex flex-1 justify-center items-center mx-auto max-w-[1000px] px-10 sm:px-20">
      <div>
        <div className={`${styles.container}`}>
          {loadInfo.split('').map((p, key) => (
            <p key={key} className='inline text-[12px]  md:text-[14px] tracking-wider text-primary opacity-[0.8]' >{p}</p>
          ))}
        </div>
        <p className={`text-lightest_slate font-ppSemiBold tracking-tighter ${helpers.title_1}`}>Jhordan Huaman.</p>
        <p className={`text-[25px] md:text-[60px] opacity-[0.6] ${helpers.title_1} leading-[0.9]`}>I Build things for the web</p>
        <div className='mt-[20px] max-w-[70%]'>
          <p className={`text-slate  tracking-wide inline ${helpers.normal_text}`}>I am an aspiring software engineer especially in building things (and occasionally designing) exceptional digital experiences. Currently, I'm focused on learning new things and developing my career</p>
          <span className='text-primary  opacity-[1] font-ppBold'>to beat it.</span>
        </div>
        <div className='inline-block mt-[20px] z-0 bg-primary rounded-md'>
          <button className={`${helpers.buttons}`}>
            Check out my proyects!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main