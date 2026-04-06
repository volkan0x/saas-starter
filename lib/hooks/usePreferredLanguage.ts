'use client';

import { useEffect, useState } from 'react';

export type Language = 'TR' | 'EN';

export const languageStorageKey = 'preferredLanguage';
export const languageEventName = 'preferred-language-change';

export const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'TR';
  }

  const savedLanguage = window.localStorage.getItem(languageStorageKey);
  return savedLanguage === 'EN' ? 'EN' : 'TR';
};

export const setPreferredLanguage = (language: Language) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(languageStorageKey, language);
  document.documentElement.lang = language.toLowerCase();
  window.dispatchEvent(new CustomEvent(languageEventName, { detail: language }));
};

export const usePreferredLanguage = () => {
  const [language, setLanguage] = useState<Language>('TR');

  useEffect(() => {
    const updateLanguage = () => {
      const nextLanguage = getStoredLanguage();
      setLanguage(nextLanguage);
      document.documentElement.lang = nextLanguage.toLowerCase();
    };

    const handleLanguageEvent = (event: Event) => {
      const customEvent = event as CustomEvent<Language>;
      if (customEvent.detail === 'EN' || customEvent.detail === 'TR') {
        setLanguage(customEvent.detail);
      } else {
        updateLanguage();
      }
    };

    updateLanguage();
    window.addEventListener('storage', updateLanguage);
    window.addEventListener(languageEventName, handleLanguageEvent as EventListener);

    return () => {
      window.removeEventListener('storage', updateLanguage);
      window.removeEventListener(languageEventName, handleLanguageEvent as EventListener);
    };
  }, []);

  return language;
};
