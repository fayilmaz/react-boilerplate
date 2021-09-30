import fetchIntercept from 'fetch-intercept'

export const unregister = fetchIntercept.register({
  request: (url, config) => {
    const interceptedConfig = {
      ...config,
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'default',
    }
    // console.log("request was made to:",url)
    // Modify the url or config here
    return [url, interceptedConfig]
  },

  requestError: (error) => {
    // console.log('Error : ', error)
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error)
  },

  response: (response) => {
    // Modify the reponse object
    // console.log('Response', response)
    return response
  },

  responseError: (error) => {
    // console.log('Error : ', error)
    // Handle fetch error
    return Promise.reject(error)
  },
})

export const getInterceptor = (url: string) => fetch(url)
