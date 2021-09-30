import React from 'react'
import ReactDOM from 'react-dom'
import 'src/index.css'
import { Provider } from 'react-redux'
import { store } from 'src/shared/store/index'
import App from 'src/App'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
