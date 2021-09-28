import { actionsEnum } from 'src/types/actionTypes'
import { apiReducerInitialState, apiReducerPayloadType } from 'src/types/reducerType'

const apiInitialState: apiReducerInitialState = {
  data: null,
  dataLoading: false,
  dataLoadingSuccess: false,
  dataLoadingFail: false,
  error: null,
}

export const apiReducer = (state = apiInitialState, action: apiReducerPayloadType) => {
  switch (action.type) {
    case actionsEnum.API_REQ_LOADING:
      return {
        ...state,
        dataLoading: true,
      }
    case actionsEnum.API_REQ_SUCCESS:
      return {
        ...state,
        data: { message: action.payload?.data?.message },
        dataLoading: false,
        dataLoadingSuccess: true,
      }
    case actionsEnum.API_REQ_FAIL:
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
