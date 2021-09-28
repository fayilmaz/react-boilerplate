export type todo = {
  id: string
  title: string
  isCompleted: boolean
}

export interface storeType {
  lang: langState
  langInput: string
  languageLoading: boolean
  languageLoaded: boolean
  languageLoadingFail: boolean
}

export interface langState {
  value: string
}
