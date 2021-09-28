import * as Effects from 'redux-saga/effects'
import { actionsEnum } from 'src/types/actionTypes'
import { fakeAPIAction } from '../actions'

const call: any = Effects.call
const select: any = Effects.select
const put: any = Effects.put
const takeLatest: any = Effects.takeLatest

// Workers
export function* requestAPI() {
  yield put({ type: actionsEnum.API_REQ_LOADING })
  try {
    yield call(fakeAPIAction)
    yield put({
      type: actionsEnum.API_REQ_SUCCESS,
      payload: { data: { message: 'This is a response message from fake API.' } },
    })
  } catch (err) {
    yield put({ type: actionsEnum.API_REQ_FAIL, payload: { error: (err as Error).message } })
  }
}

// Watchers
export function* apiSaga() {
  yield takeLatest(actionsEnum.API_REQ_SAGA, requestAPI)
}
