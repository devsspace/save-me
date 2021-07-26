import DonorInfo from "@components/DonorInfo"
import React from "react"

const DonorProfile = () => (
  <div className="bg-gray-100">
    <div className="bg-gray-100 h-24 min-h-0 md:min-h-full flex items-center">
      <div className="container mx-auto">
        <h1 className="text-2xl">Donor Profile</h1>
      </div>
    </div>
    <DonorInfo />
  </div>
)

export default DonorProfile
