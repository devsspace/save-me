import React from "react"
import { useForm, useStep } from "react-hooks-helper"
import BasicInfo from "./StepForm/BasicInfo"
import FeeAndEducation from "./StepForm/FeeAndEducation"
import Submit from "./StepForm/Submit"

const defaultData = {
  fullName: "",
  degrees: "",
  speciality: "",
  bmdcNumber: "",

  consultationFee: "",
  followUpFee: "",
  totalExperienceYears: "",
  profilePic: "",
}

const steps = [{ id: "basicInfo" }, { id: "feeAndEducation" }, { id: "submit" }]

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
