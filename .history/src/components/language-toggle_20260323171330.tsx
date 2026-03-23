'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isSpanish = i18n.language === 'es';

  return (
    <button
      onClick={() => i18n.changeLanguage(isSpanish ? 'en' : 'es')}
      className="text-[15px] md:text-[14px] rounded-full tracking-wider text-primary opacity-[0.8] hover:opacity-100 transition-opacity font-ppMedium"
    >
      {isSpanish ? 'EN' : 'ES'}
    </button>
  );
}
