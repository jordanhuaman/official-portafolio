'use client';

import React from 'react'
import styles from "@/styles/letteranimaiton.module.css"
import helpers from "@/styles/helpers.module.css"
import { useTranslation } from 'react-i18next'
import Navbard from '../nabard';

const Main = () => {
  const { t } = useTranslation();
  const greeting = t('hero.greeting');

  return (
    <div className="flex flex-1 flex-col max-w-[1000px]">
      <div>
        <p className={`text-[#c5d1ed] font-ppSemiBold tracking-tighter ${helpers.title_1}`}>{t('hero.name')}</p>
        <p className={`text-[10px] md:text-[10px] text-[#c5d1ec] tracking-tighter ${helpers.title_3} leading-[0.9]`}>{t('hero.role')}</p>
        <div className='mt-[20px] max-w-[70%] flex flex-col gap-2'>
          <p className={`text-slate  leading-normal inline ${helpers.normal_text}`}>{t('hero.description')}</p>
        </div>
      </div>
      <Navbard />
    </div>
  )
}

export default Main
