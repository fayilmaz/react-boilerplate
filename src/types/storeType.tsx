export interface storeType {
  lang: langState
  data: dataStateType
}

export interface dataStateType {
  data: null | string | object
  dataLoading: boolean
  dataLoadingSuccess: boolean
  dataLoadingFail: boolean
  error: null | string
}

export interface langState {
  value: string
}
