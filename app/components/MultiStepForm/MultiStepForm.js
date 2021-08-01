import Basic from "@components/MultiStepForm/StepForm/Basic"
import PermanentAddress from "@components/MultiStepForm/StepForm/PermanentAddress"
import PresentAddress from "@components/MultiStepForm/StepForm/PresentAddress"
import { useDonorContext } from "app/contexts/DonorContext"
import React from "react"
import { useStep } from "react-hooks-helper"



const steps = [
  { id: "basic" },
  { id: "presentAddress" },
  { id: "permanentAddress" },
]
const MultiStepForm = () => {
  const {donor, setDonor} = useDonorContext()
  console.log(donor)
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  })

  const props = { formData: donor, setForm: setDonor, navigation }

  switch (step.id) {
    case "basic":
      return <Basic {...props} />
    case "presentAddress":
      return <PresentAddress {...props} />
    case "permanentAddress":
      return <PermanentAddress {...props} />
    default:
      return <Basic {...props} />
  }
}

export default MultiStepForm
