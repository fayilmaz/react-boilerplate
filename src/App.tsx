import React, { useEffect } from 'react'
import { storeType } from 'src/types/storeType'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { changeLang, getDataSagaAction } from './store/actions'
import './App.css'
import logo from './logo.svg'

const App: React.FC = () => {
  useEffect(() => {
    changeLang()
  }, [])

  const getState = (state: storeType) => {
    return state
  }
  const langSelector = createSelector(getState, (state) => {
    return state.lang.value
  })
  const lang = useSelector(langSelector)

  const handleFakeAPI = () => {
    getDataSagaAction()
  }

  const handleLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    changeLang(target.value)
  }

  return (
    <div className="text-center">
      <header className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-lg text-white">
        <img src={logo} className="h-80 pointer-events-none rlogospin:spin-fast" alt="logo" />
        <p>
          Edit <code className="text-linkBlue">src/App.tsx</code> and save to reload.
        </p>
        <a
          // className="App-link"
          className="text-linkBlue"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <div className="mt-4 justify-center align-center">
          <div className="border-2 max-w-max m-auto rounded-lg ring-white-700 ring-4 mb-2">
            <p className=" text-center m-2">Language: {lang}</p>
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
              onClick={() => handleFakeAPI()}>
              Fake API Request With Random Response
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
