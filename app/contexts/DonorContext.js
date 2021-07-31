import { createContext, useContext, useState } from "react"

export const DonorContext = createContext()

export function DonorWrapper({ children }) {
  const [donors, setDonors] = useState(null)
  const [searchInfo, setSearchInfo] = useState({
    bloodGroup: "A+",
    location: "Dhaka",
    date: "",
    eligibility: "eligible",
  })
  const sharedState = {
    donors,
    setDonors,
    searchInfo,
    setSearchInfo,
  }
  

  return (
    <DonorContext.Provider value={sharedState}>
      {children}
    </DonorContext.Provider>
  )
}

export function useDonorContext() {
  return useContext(DonorContext)
}
