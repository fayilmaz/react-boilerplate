import { getInterceptor } from '../interceptors/getInterceptor'

export const apiGet = async (url: string) => {
  const response = getInterceptor(url)
    .then((res) => res)
    .then((data) => data.json())
  return response
}

export const apiPost = (url: string) => {
  const response = fetch(url)
    // modify here to shape the response
    .then((res) => res)
    .then((data) => data.json())
  return response
}
