import { createSelector } from 'reselect'
import { StoreType } from '../types/storeType'

export const getState = (state: StoreType) => {
  return state
}

export const langSelector = createSelector(getState, (state) => {
  return state.lang.value
})
