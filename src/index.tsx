import React from 'react'
import ReactDOM from 'react-dom'
import 'src/index.css'
import { Provider } from 'react-redux'
import { store } from 'src/shared/store/index'
import App from 'src/App'

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <Provider store={store}>
        <App />
      </Provider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
