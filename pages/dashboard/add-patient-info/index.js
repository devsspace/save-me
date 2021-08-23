import DashboardWrapper from "@components/Dashboard/DashboardWrapper"
import DonorInfo from "@components/DoctorProfileMultiStepForm/DonorInfo"
import React from "react"

const DonorProfile = () => (
  <DashboardWrapper>
    <div className="dashboard-main">
      <div className="h-24 min-h-0 md:min-h-full flex items-center">
        <div className="container mx-auto">
          <h1 className="text-2xl"> Patient Info </h1>
        </div>
      </div>
      <DonorInfo />
    </div>
  </DashboardWrapper>
)

export default DonorProfile
