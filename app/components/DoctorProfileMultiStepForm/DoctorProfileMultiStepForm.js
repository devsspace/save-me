import React from "react"
import { useForm, useStep } from "react-hooks-helper"
import AboutDoctor from "./StepForm/AboutDoctor"
import BasicInfo from "./StepForm/BasicInfo"
import FeeAndEducation from "./StepForm/FeeAndEducation"

const defaultData = {
  fullName: "",
  degrees: "",
  speciality: "",
  bmdcNumber: "",
  profilePic: "",

  consultationFee: "",
  followUpFee: "",
  educationalBackgroundDetails: "",
  totalExperienceYears: "",

  designation: "",
  department: "",
  employmentPeriod: "",
  aboutDoctor: "",
}

const steps = [
  { id: "basicInfo" },
  { id: "feeAndEducation" },
  { id: "aboutDoctor" },
]

const DoctorProfileMultiStepForm = () => {
  const [formData, setFormData] = useForm(defaultData)
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  })

  const props = { formData, setFormData, navigation }

  switch (step.id) {
    case "basicInfo":
      return <BasicInfo {...props} />
    case "feeAndEducation":
      return <FeeAndEducation {...props} />
    case "aboutDoctor":
      return <AboutDoctor {...props} />
  }

  return (
    <div>
      <h1 className="text-center text-2xl">Doctor Profile</h1>
    </div>
  )
}

export default DoctorProfileMultiStepForm
