import { actionsEnum } from 'src/types/actionTypes'
import { langReducerInitialState, langReducerPayloadType } from 'src/types/reducerType'

const langInitialState: langReducerInitialState = {
  value: '',
}

export const langReducer = (state = langInitialState, action: langReducerPayloadType) => {
  switch (action.type) {
    case actionsEnum.CHANGE_LANG:
      return {
        ...state,
        value: action.payload?.lang,
      }
    default:
      return state
  }
}
