import { allLangTranslates, defaultLang, languages } from './translates'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in languages) return lang as keyof typeof languages
  return defaultLang
}

export function useTranslations(lang: keyof typeof languages) {
  return allLangTranslates[lang]
}
