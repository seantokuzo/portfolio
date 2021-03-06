import React, { useState, useEffect } from 'react'
const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (prefersDarkMode !== darkMode) setDarkMode(prefersDarkMode)
  }, [])

  //DARKMODE SET BACKGROUND COLOR
  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add('light-mode')
    } else {
      document.body.classList.remove('light-mode')
      return
    }
  }, [darkMode])

  function toggleTheme() {
    setDarkMode((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider, ThemeContext }
