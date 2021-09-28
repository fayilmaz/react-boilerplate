export enum actionsEnum {
  CHANGE_LANG = 'CHANGE_LANG',
  CHANGE_LANG_INPUT = 'CHANGE_LANG_INPUT',
  API_REQ_LOADING = 'API_REQ_LOADING',
  API_REQ_SUCCESS = 'API_REQ_SUCCESS',
  API_REQ_FAIL = 'API_REQ_FAIL',
  API_REQ_SAGA = 'API_REQ_SAGA',
}

export interface changeLangAction {
  type: actionsEnum.CHANGE_LANG
  payload: { lang: string }
}

export interface getDataLoadingAction {
  type: actionsEnum.API_REQ_LOADING
}

export interface getDataSuccessAction {
  type: actionsEnum.API_REQ_SUCCESS
  payload: { data: string }
}

export interface getDataFailAction {
  type: actionsEnum.API_REQ_FAIL
  payload: { error: string }
}

export interface getDataSagaAction {
  type: actionsEnum.API_REQ_SAGA
}
