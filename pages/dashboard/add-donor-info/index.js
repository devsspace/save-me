import DashboardWrapper from "@components/Dashboard/DashboardWrapper"
import DonorInfo from "@components/MultiStepForm/DonorInfo"
import React from "react"

const DonorProfile = () => (
  <DashboardWrapper>
    <div className="h-24 min-h-0 md:min-h-full flex items-center">
      <h1 className="title">Donor Info</h1>
    </div>
    <DonorInfo />
  </DashboardWrapper>
)

export default DonorProfile
