import { ActionsEnum } from 'src/shared/store/types/actionTypes'
import { LangReducerInitialState, LangReducerPayloadType } from 'src/shared/store/types/reducerType'

const langInitialState: LangReducerInitialState = {
  value: '',
}

export const langReducer = (state = langInitialState, action: LangReducerPayloadType) => {
  switch (action.type) {
    case ActionsEnum.CHANGE_LANG:
      return {
        ...state,
        value: action.payload?.lang,
      }
    default:
      return state
  }
}
