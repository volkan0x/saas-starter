'use client';

import { Language, setPreferredLanguage, usePreferredLanguage } from '@/lib/hooks/usePreferredLanguage';

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const language = usePreferredLanguage();

  const handleChange = (nextLanguage: Language) => {
    setPreferredLanguage(nextLanguage);
  };

  return (
    <div
      className={`inline-flex items-center rounded-full bg-gray-100 p-1 ${className}`}
      role="group"
      aria-label="Dil seçimi / Language selection"
    >
      {(['TR', 'EN'] as Language[]).map((option) => {
        const isActive = language === option;

        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => handleChange(option)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              isActive
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {option === 'TR' ? '🇹🇷 TR' : '🇺🇸 EN'}
          </button>
        );
      })}
    </div>
  );
}
