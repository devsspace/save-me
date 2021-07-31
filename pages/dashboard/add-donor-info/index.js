import withAuth from "@components/auth/withAuth"
import MultiStepForm from "@components/MultiStepForm/MultiStepForm"
import React from "react"

const DonorProfile = () => (
  <div>
    <div className="h-24 min-h-0 md:min-h-full flex items-center">
      <h1 className="text-2xl text-center mx-auto">Donor Profile</h1>
    </div>
    <MultiStepForm />
  </div>
)

export default withAuth(DonorProfile)
