import {
  ChangeLangAction,
  GetDataSagaAction,
  GetDataSuccessAction,
  GetDataLoadingAction,
  GetDataFailAction,
} from './actionTypes'

export type ChangeLangActionCreator = () => ChangeLangAction
export type GetDataSagaActionCreator = () => GetDataSagaAction
export type GetDataLoadingActionCreator = () => GetDataLoadingAction
export type GetDataSuccessActionCreator = () => GetDataSuccessAction
export type GetDataFailActionCreator = () => GetDataFailAction
