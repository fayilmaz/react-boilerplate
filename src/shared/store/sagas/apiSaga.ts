import * as Effects from 'redux-saga/effects'
import { ActionsEnum } from 'src/shared/store/types/actionTypes'
import { getDataFromApi } from '../actions'

const call: any = Effects.call
const put: any = Effects.put
const takeLatest: any = Effects.takeLatest

interface Response {
  userId: number
  id: number
  title: string
  body: string
}

// Workers
export function* getRequestFromAPI() {
  yield put({ type: ActionsEnum.API_REQ_LOADING })
  try {
    const data: Response = yield call(getDataFromApi)
    yield put({
      type: ActionsEnum.API_REQ_SUCCESS,
      payload: data,
    })
  } catch (err) {
    yield put({ type: ActionsEnum.API_REQ_FAIL, payload: { error: err as Error } })
  }
}

// Watchers
export function* apiSaga() {
  yield takeLatest(ActionsEnum.API_REQ_SAGA, getRequestFromAPI)
}
