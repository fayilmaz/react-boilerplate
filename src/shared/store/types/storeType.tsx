export interface StoreType {
  lang: LangStateType
  data: DataStateType
}

export interface DataStateType {
  data: null | string | object
  dataLoading: boolean
  dataLoadingSuccess: boolean
  dataLoadingFail: boolean
  error: null | string
}

export interface LangStateType {
  value: string
}
