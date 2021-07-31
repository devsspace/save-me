import { createContext, useContext, useState } from "react"

export const DonorContext = createContext()

export function UserWrapper({ children }) {
  const [donors, setDonors] = useState(null)
  const [searchInfo, setSearchInfo] = useState({
    bloodGroup: "",
    location: "",
    date: "",
    eligibility: true
  })
  const sharedState = {
    donors,
    setDonors,
    searchInfo,
    setSearchInfo
  }

  return (
    <DonorContext.Provider value={sharedState}>{children}</DonorContext.Provider>
  )
}

export function useDonorContext() {
  return useContext(DonorContext)
}
