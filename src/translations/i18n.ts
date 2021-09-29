import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { TRANSLATIONS_TR } from './tr/translations'
import { TRANSLATIONS_EN } from './en/translations'
import { TRANSLATIONS_DE } from './de/translations'
import { TRANSLATIONS_FR } from './fr/translations'

const options = {
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  htmlTag: document.documentElement,

  cookieOptions: { path: '/', sameSite: 'strict' },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      tr: {
        translation: TRANSLATIONS_TR,
      },
      de: {
        translation: TRANSLATIONS_DE,
      },
      fr: {
        translation: TRANSLATIONS_FR,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

const languageDetector = new LanguageDetector()
languageDetector.init(options)
