import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import httpBackend from 'i18next-http-backend'

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
  .use(httpBackend)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  })

const languageDetector = new LanguageDetector()
languageDetector.init(options)
