export const getFromLocalStorage = () => {
  try {
    const language = window.localStorage.getItem('language')
    return language ? JSON.parse(language) : 'es'
  } catch (e) {
    throw new Error('Unable to get data from localStorage: ' + e.message)
  }
}

export const saveToLocalStorage = (language) => {
  try {
    window.localStorage.setItem('language', JSON.stringify(language))
  } catch (e) {
    throw new Error('Unable to save to localStorage: ' + e.message)
  }
}