import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import i18n from 'i18next'
import 'src/shared/services/i18n'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { changeLang, getDataSagaAction } from './shared/store/actions'
import { itemsSelector, langSelector } from './shared/store/selectors'
import Home from './shared/components/Home'

export interface ItemType {
  crew: string
  fullTitle: string
  id: string
  imDbRating: string
  imDbRatingCount: string
  image: string
  rank: string
  title: string
}

const App: React.FC = () => {
  const lang = useSelector(langSelector)
  const items = useSelector(itemsSelector)

  useEffect(() => {
    getDataSagaAction()
    changeLang(i18n.language?.toLowerCase())
  }, [])

  useEffect(() => {
    i18n.changeLanguage(lang.toLowerCase())
  }, [lang])

  return (
    <Router>
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-lg text-red-500 text-center pb-20">
        <Switch>
          <Route exact path="/">
            <Home items={items} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
