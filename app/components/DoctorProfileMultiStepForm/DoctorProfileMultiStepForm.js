import { getDoctor } from "app/api/index"
import { useUserContext } from "app/contexts/UserContext"
import React, { useEffect, useState } from "react"
import { useStep } from "react-hooks-helper"
import BasicInfo from "./StepForm/BasicInfo"
import FeeAndEducation from "./StepForm/FeeAndEducation"
import Submit from "./StepForm/Submit"


const steps = [{ id: "basicInfo" }, { id: "feeAndEducation" }, { id: "submit" }]

const DoctorProfileMultiStepForm = () => {
  
  const { currentUser } = useUserContext()
  
  const defaultData = {
    name: "",
    bmdcNumber: "",
  
    consultationFee: "",
    followUpFee: "",
    totalExperienceYears: "",
    profilePic: "",
  }
  const [speciality, setSpeciality] = useState(["Cardiac"])
  const [degrees, setDegrees] = useState(["MBBS"])
  
  const [formData, setFormData] = useState(defaultData)
  
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  })

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await getDoctor(currentUser._id)

        setFormData(data)
      } catch (error) {
        console.log(error)
      }
    }
    get()
  }, [])
  console.log(formData)


  const props = { formData, setFormData, navigation, speciality, degrees, setSpeciality, setDegrees }

  switch (step.id) {
    case "basicInfo":
      return <BasicInfo {...props} />
    case "feeAndEducation":
      return <FeeAndEducation {...props} />
    case "submit":
      return <Submit {...props} />
  }

  return (
    <div>
      <h1 className="text-center text-2xl">Doctor Profile</h1>
    </div>
  )
}

export default DoctorProfileMultiStepForm
