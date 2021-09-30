import createSagaMiddleware from '@redux-saga/core'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from 'src/shared/store/reducers/index'
import { rootSaga } from './sagas'

export const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
