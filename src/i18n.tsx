import React, { createContext, useContext, useEffect, useState } from 'react';
import { Lang, translations, translate } from './i18nCore';

interface TranslationContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<TranslationContextValue | undefined>(undefined);

export function useTranslation(): TranslationContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }
  return ctx;
}

function interpolate(str: string, vars?: Record<string, string | number>) {
  if (!vars) return str;
  return Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, String(v)), str);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangRaw] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved && ['en', 'th'].includes(saved)) {
      setLangRaw(saved);
    } else {
      const nav = navigator.language.slice(0, 2) as Lang;
      if (nav === 'th') setLangRaw('th');
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangRaw(l);
    localStorage.setItem('lang', l);
    document.documentElement.lang = l;
  };

  const t = (key: string, vars?: Record<string, string | number>) => {
    const map = translations[lang] || translations.en;
    let txt = map[key] || translations.en[key] || key;
    return interpolate(txt, vars);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}
