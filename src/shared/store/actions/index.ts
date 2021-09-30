import { apiGet } from 'src/shared/services/api/apiHandler'
import { store } from 'src/shared/store/index'
import { ActionsEnum } from 'src/shared/store/types/actionTypes'

// TODO: Implement dotenv
const API_KEY = 'k_u3m6cyxb'
const URL = `https://imdb-api.com/en/API/Top250Movies/${API_KEY}`

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
    const data = await apiGet(URL)

    return data
  } catch {
    return store.dispatch({ type: ActionsEnum.API_REQ_FAIL })
  }
}
