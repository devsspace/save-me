import { createContext, useContext, useState } from "react"
import { useForm } from "react-hooks-helper"

export const DonorContext = createContext()

export function DonorWrapper({ children }) {
  const initialDonorData = {
    fullName: "",
    bloodGroup: "",
    gender: "",
    mobileNumber: "",
    lastDonation: "",
    nid: "",
    presentAdd: "",
    presentPoliceStation: "",
    presentDistrict: "",
    permanenttAdd: "",
    permanentPoliceStation: "",
    permanentDistrict: "",
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
