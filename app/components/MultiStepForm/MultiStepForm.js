import Basic from "@components/MultiStepForm/StepForm/Basic"
import PermanentAddress from "@components/MultiStepForm/StepForm/PermanentAddress"
import PresentAddress from "@components/MultiStepForm/StepForm/PresentAddress"
import UploadImage from "@components/MultiStepForm/StepForm/UploadImage"
import React from "react"
import { useForm, useStep } from "react-hooks-helper"

const defaultData = {
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
  imgInfo: "",
}

const steps = [
  { id: "basic" },
  { id: "presentAddress" },
  { id: "permanentAddress" },
  { id: "uploadImage" },
]
const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData)
  console.log(formData)
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  })

  const props = { formData, setForm, navigation }

  switch (step.id) {
    case "basic":
      return <Basic {...props} />
    case "presentAddress":
      return <PresentAddress {...props} />
    case "permanentAddress":
      return <PermanentAddress {...props} />
    case "uploadImage":
      return <UploadImage {...props} />
    default:
      return <Basic {...props} />
  }
}

export default MultiStepForm
