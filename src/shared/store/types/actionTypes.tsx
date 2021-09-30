export enum ActionsEnum {
  CHANGE_LANG = 'CHANGE_LANG',
  CHANGE_LANG_INPUT = 'CHANGE_LANG_INPUT',
  API_REQ_LOADING = 'API_REQ_LOADING',
  API_REQ_SUCCESS = 'API_REQ_SUCCESS',
  API_REQ_FAIL = 'API_REQ_FAIL',
  API_REQ_SAGA = 'API_REQ_SAGA',
}

export interface ChangeLangAction {
  type: ActionsEnum.CHANGE_LANG
  payload: { lang: string }
}

export interface GetDataLoadingAction {
  type: ActionsEnum.API_REQ_LOADING
}

export interface GetDataSuccessAction {
  type: ActionsEnum.API_REQ_SUCCESS
  payload: { data: string }
}

export interface GetDataFailAction {
  type: ActionsEnum.API_REQ_FAIL
  payload: { error: string }
}

export interface GetDataSagaAction {
  type: ActionsEnum.API_REQ_SAGA
}
