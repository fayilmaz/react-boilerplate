import { AnyAction } from 'redux'

export interface LangReducerInitialState {
  value: string
}

export interface ApiReducerInitialState {
  data: null | string | object
  dataLoading: boolean
  dataLoadingSuccess: boolean
  dataLoadingFail: boolean
  error: null | string
}

export interface LangReducerPayloadType extends AnyAction {
  payload?: {
    lang: string
  }
}
export interface ApiReducerPayloadType extends AnyAction {
  payload?: {
    data?: object
    error?: string
  }
}
