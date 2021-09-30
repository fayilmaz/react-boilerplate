import { ActionsEnum } from 'src/shared/store/types/actionTypes'
import { ApiReducerInitialState, ApiReducerPayloadType } from 'src/shared/store/types/reducerType'

const apiInitialState: ApiReducerInitialState = {
  data: null,
  dataLoading: false,
  dataLoadingSuccess: false,
  dataLoadingFail: false,
  error: null,
}

export const apiReducer = (state = apiInitialState, action: ApiReducerPayloadType) => {
  switch (action.type) {
    case ActionsEnum.API_REQ_LOADING:
      return {
        ...state,
        dataLoading: true,
      }
    case ActionsEnum.API_REQ_SUCCESS:
      return {
        ...state,
        data: action.payload,
        dataLoading: false,
        dataLoadingSuccess: true,
      }
    case ActionsEnum.API_REQ_FAIL:
      return {
        ...state,
        dataLoading: false,
        dataLoadingSuccess: false,
        dataLoadingFail: true,
        error: action.payload?.error,
      }
    default:
      return state
  }
}
