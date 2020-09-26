export const getFromLocalStorage = (key) => {
  const jsonString = window.localStorage.getItem(key)
  return jsonString ? JSON.parse(jsonString) : false
}

export const saveToLocalStorage = (key, content) => {
  const stringifiedContent = JSON.stringify(content)
  window.localStorage.setItem(key, stringifiedContent)
}
