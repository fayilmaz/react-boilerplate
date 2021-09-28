export const getData = (url: string) => {
  const data = fetch(url)
    // modify here to shape the response
    .then((res) => res.json())
    .then((data) => data.data)
  return data
}
