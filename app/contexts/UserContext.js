import { createContext, useContext, useState } from "react"


export const UserContext = createContext()

export function UserWrapper({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const sharedState = {
    currentUser,
    setCurrentUser,
  }

  return (
    <UserContext.Provider value={sharedState}>{children}</UserContext.Provider>
  )
}

export function useUserContext() {
  return useContext(UserContext)
}
