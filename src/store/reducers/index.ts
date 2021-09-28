import { combineReducers } from 'redux'
import { langReducer } from 'src/store/reducers/langReducer'
import { apiReducer } from './apiReducer'

export const rootReducer = combineReducers({
  lang: langReducer,
  data: apiReducer,
})
