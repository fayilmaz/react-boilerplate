export interface StoreType {
  lang: LangStateType
  data: DataStateType
}

export interface DataStateType {
  data: {
    items: Object[]
    errorMessage: string
  }
  dataLoading: boolean
  dataLoadingSuccess: boolean
  dataLoadingFail: boolean
  error: null | string
}

export interface LangStateType {
  value: string
}
