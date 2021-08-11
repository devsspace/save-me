import AppButton from "@components/others/AppButton"
import { useRouter } from "next/router"
import React from "react"

const BloodUrgentNeedCard = () => {
  const router = useRouter()
  const handleAppoinment = () => {
    router.replace("/user/login")
  }
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly">
      <div>
        <img
          className="w-auto h-80"
          src="https://i.ibb.co/RbcSMh5/5739306.jpg"
          alt=""
        />
      </div>
      <div className="text-center leading-10 mt-8">
        <h1 className="text-error text-4xl uppercase">critical need</h1>
        <h3 className="text-primary text-xl">FOR ALL BLOOD TYPES</h3>
        <h5 className="text-error">Appointments Strongly Encouraged</h5>
        <AppButton onClick={handleAppoinment} className="mx-auto h-10">
          Make an Appointment
        </AppButton>
      </div>
    </div>
  )
}

export default BloodUrgentNeedCard
