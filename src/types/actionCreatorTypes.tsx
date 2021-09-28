import {
  changeLangAction,
  getDataSagaAction,
  getDataSuccessAction,
  getDataLoadingAction,
  getDataFailAction,
} from './actionTypes'

export type changeLangActionCreator = () => changeLangAction
export type getDataSagaActionCreator = () => getDataSagaAction
export type getDataLoadingActionCreator = () => getDataLoadingAction
export type getDataSuccessActionCreator = () => getDataSuccessAction
export type getDataFailActionCreator = () => getDataFailAction
