import { errorAlert, successAlert } from "@components/others/Alerts"
import AppButton from "@components/others/AppButton"
import TagsInput from "@components/others/TagsInput"
import React, { useState } from "react"
import PrescriptioForm from "./PrescriptioForm"

const Prescription = () => {
  const [complaints, setComplaints] = useState(["Pain"])
  const [investigations, setInvestigations] = useState(["X-ray"])
  const [textAreas, setTextAreas] = useState([{ value: null }])
  const [prescriptions, setPrescriptions] = useState([])

  // Add textarea
  const handleAddTextArea = () => {
    const values = [...textAreas]
    values.push({ value: null })
    setTextAreas(values)
  }

  // handle change
  const handleChange = (i, e) => {
    const values = [...textAreas]
    values[i].value = e.target.value
    setTextAreas(values)
  }

  // Remove textrea
  const handleRemoveTextArea = (i) => {
    const values = [...textAreas]
    values.splice(i, 1)
    if (values.length < 1) {
      errorAlert("keep atleast single textarea")
      return values
    }
    return setTextAreas(values)
  }

  // save prescription
  const handlePrescriptionSave = () => {
    const prescriptionData = {
      complaints,
      investigations,
      textAreas,
    }
    successAlert("Prescription succesfully saved")
    setPrescriptions(prescriptionData)
  }
  return (
    <>
      <div className="shadow-lg flex-auto p-5 mt-10 sm:p-10 pb-20 mx-auto w-full md:w-[500px]">
        <h1 className="text-center text-primary text-2xl">Make Rx</h1>
        <div className="w-full">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            <span className="text-red-400 mr-1">*</span> Chief Comlaints
          </div>
          <TagsInput
            className="w-full"
            name="complaints"
            state={complaints}
            setState={setComplaints}
          />
        </div>
        <div className="w-full">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            <span className="text-red-400 mr-1">*</span> Investigations
          </div>
          <TagsInput
            className="w-full"
            name="investigations"
            state={investigations}
            setState={setInvestigations}
          />
        </div>

        <div className="w-full">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            <span className="text-red-400 mr-1">*</span> Medicines
          </div>
          {textAreas.map((textArea, ids) => {
            const key = textArea - ids
            return (
              <div className="flex flex-row justify-between" key={key}>
                <div>
                  <textarea
                    className="p-2 min-h-[50px] mt-2 shadow-lg w-72"
                    placeholder="Enter medicine name"
                    value={textArea.value || ""}
                    onChange={(e) => handleChange(ids, e)}
                  />
                </div>
                <div>
                  <AppButton
                    className="mt-4"
                    onClick={() => handleRemoveTextArea(ids)}
                  >
                    X
                  </AppButton>
                </div>
              </div>
            )
          })}
          <div className="flex flex-row mt-4">
            <AppButton className="mx-auto" onClick={() => handleAddTextArea()}>
              Add Medicines
            </AppButton>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row justify-center mt-8">
            <AppButton onClick={handlePrescriptionSave}>
              Save Prescription
            </AppButton>
          </div>
        </div>
      </div>

      <PrescriptioForm prescriptions={prescriptions} />
    </>
  )
}

export default Prescription
