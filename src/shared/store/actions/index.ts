import { apiGet } from 'src/shared/services/api/apiHandler'
import { store } from 'src/shared/store/index'
import { ActionsEnum } from 'src/shared/store/types/actionTypes'

export const changeLang = (payload = 'EN') => {
  return store.dispatch({
    type: ActionsEnum.CHANGE_LANG,
    payload: { lang: payload },
  })
}

export const getDataSagaAction = () => {
  return store.dispatch({ type: ActionsEnum.API_REQ_SAGA })
}

export const getDataFromApi = async () => {
  try {
    const data = await apiGet(`https://jsonplaceholder.typicode.com/posts/`)
    return data
  } catch {
    return store.dispatch({ type: ActionsEnum.API_REQ_FAIL })
  }
}
