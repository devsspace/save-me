import { createContext, useContext, useState } from "react"


export const AppContext = createContext()

export function AppWrapper({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const sharedState = {
    currentUser,
    setCurrentUser,
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
