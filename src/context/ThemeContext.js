import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
  savedList: [],
  addToSavedList: () => {},
  removeFromSavedList: () => {},
})

export default ThemeContext
