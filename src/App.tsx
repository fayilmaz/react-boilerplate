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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <div>
          <h5>Language: {lang}</h5>
          <button type="button" value="EN" onClick={(e) => handleLanguage(e)}>
            EN
          </button>
          <button type="button" value="TR" onClick={(e) => handleLanguage(e)}>
            TR
          </button>
          <div>
            <button type="button" value="TR" onClick={() => handleFakeAPI()}>
              Fake API Request With Random Response
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
