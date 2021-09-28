import { AnyAction } from 'redux'

export interface langReducerInitialState {
  value: string
}

export interface apiReducerInitialState {
  data: null | string | object
  dataLoading: boolean
  dataLoadingSuccess: boolean
  dataLoadingFail: boolean
  error: null | string
}

export interface langReducerPayloadType extends AnyAction {
  payload?: {
    lang: string
  }
}
export interface apiReducerPayloadType extends AnyAction {
  payload?: {
    data?: { message: boolean | string }
    error?: string
  }
}
