'use client';

import React from 'react'
import styles from "@/styles/letteranimaiton.module.css"
import helpers from "@/styles/helpers.module.css"
import { useTranslation } from 'react-i18next'

const Main = () => {
  const { t } = useTranslation();
  const greeting = t('hero.greeting');
  
  return (
    <div className="flex flex-1  mx-auto max-w-[1000px] px-10 sm:px-20">
      <div>
        <div className={`${styles.container}`}>
          {greeting.split('').map((p, key) => (
            <p key={key} className='inline text-[12px]  md:text-[14px] tracking-wider text-primary opacity-[0.8]' >{p}</p>
          ))}
        </div>
        <p className={`text-lightest_slate font-ppSemiBold tracking-tighter ${helpers.title_2}`}>{t('hero.name')}</p>
        <p className={`text-[10px] md:text-[10px] opacity-[0.6] ${helpers.title_3} leading-[0.9]`}>{t('hero.role')}</p>
        <div className='mt-[20px] max-w-[70%] flex flex-col gap-2'>
          <p className={`text-slate   inline ${helpers.normal_text}`}>{t('hero.description')}</p>
        </div>
        <div className='inline-block mt-[20px] z-0 bg-primary rounded-md'>
          <button className={`${helpers.buttons}`}>
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main
