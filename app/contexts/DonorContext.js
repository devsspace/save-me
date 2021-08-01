import { createContext, useContext, useState } from "react"
import { useForm } from "react-hooks-helper"

export const DonorContext = createContext()

export function DonorWrapper({ children }) {
  const [loading, setLoading] = useState(false)
  const initialDonorData = {
    fullName: "",
    bloodGroup: "",
    mobileNumber: "",
    presentAdd: "",
  }
  const initialSearchInfo = {
    bloodGroup: "A+",
    location: "Dhaka",
    date: new Date(),
    eligibility: "eligible",
  }
  const [donors, setDonors] = useState(null)
  const [donor, setDonor] = useForm(initialDonorData)

  const [searchInfo, setSearchInfo] = useState(initialSearchInfo)
  const sharedState = {
    donors,
    setDonors,
    donor,
    setDonor,
    searchInfo,
    setSearchInfo,
    loading,
    setLoading,
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
