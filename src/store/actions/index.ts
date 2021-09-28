import { store } from 'src/store/index'
import { actionsEnum } from 'src/types/actionTypes'

export const changeLang = (payload = 'EN') => {
  return store.dispatch({
    type: actionsEnum.CHANGE_LANG,
    payload: { lang: payload },
  })
}

export const getDataSagaAction = () => {
  return store.dispatch({ type: actionsEnum.API_REQ_SAGA })
}

export const fakeAPIAction = async () => {
  const randomNumber = Math.floor(Math.random() * 100)
  const wait = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }
  const fakeAPIrequest = async () => {
    await wait(1000)
  }

  const error = new Error('This is a fake API error message.')
  await fakeAPIrequest().then(() => {
    if (randomNumber < 50) {
      console.error(error)
      throw error
    }
  })
}
