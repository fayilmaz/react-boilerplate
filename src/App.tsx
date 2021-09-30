import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import 'src/shared/services/i18n'
import { changeLang, getDataSagaAction } from './shared/store/actions'
import { langSelector } from './shared/store/selectors'
import logo from './logo.svg'

const App: React.FC = () => {
  const { t } = useTranslation()

  useEffect(() => {
    getDataSagaAction()
    changeLang(i18n.language.toLowerCase())
  }, [])

  const lang = useSelector(langSelector)

  useEffect(() => {
    i18n.changeLanguage(lang.toLowerCase())
  }, [lang])

  const handleLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    changeLang(target.value)
  }

  return (
    <div className="text-center">
      <header className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-lg text-white">
        <img
          src={logo}
          className="animate-spin h-80 pointer-events-none rlogospin:spin-fast"
          alt="logo"
        />
        <p>
          {t('info-1')}
          <code className="text-linkBlue">src/App.tsx</code>
          {t('info-2')}
        </p>
        <a
          className="text-linkBlue"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          {t('learn')}
        </a>
        <div className="mt-4 justify-center align-center">
          <div className="border-2 max-w-max m-auto rounded-lg ring-white-700 ring-4 mb-2">
            <p className=" text-center m-2">
              {t('langLabel')}: {i18n.language.toUpperCase()}
            </p>
          </div>
          <button
            className="bg-blue-300 py-2 px-10 m-3 rounded-lg focus:ring-4 hover:text-blue-500 hover:bg-white"
            type="button"
            value="EN"
            onClick={(e) => handleLanguage(e)}>
            EN
          </button>
          <button
            className="bg-blue-300 py-2 px-10 m-3 rounded-lg focus:ring-4 hover:text-blue-500 hover:bg-white"
            type="button"
            value="TR"
            onClick={(e) => handleLanguage(e)}>
            TR
          </button>
          <div>
            <button
              className="bg-blue-300 py-2 px-10 m-3 rounded-lg hover:bg-red-500 focus:ring-4"
              type="button"
              value="TR"
              onClick={() => getDataSagaAction()}>
              {t('apiButton')}
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
