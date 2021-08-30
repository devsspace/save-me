import { errorAlert, successAlert } from "@components/others/Alerts"
import AppButton from "@components/others/AppButton"
import AppContainer from "@components/others/AppContainer"
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
    <AppContainer>
      <h1 className="text-center text-primary text-2xl">Prescription</h1>
      {/* complaints and investigation */}
      <div className="flex flex-col md:flex-row justify-center">
        <div>
          <h1>Chief Comlaints</h1>
          <TagsInput
            className="w-full"
            name="complaints"
            state={complaints}
            setState={setComplaints}
          />
        </div>
        <div>
          <h1>Investigations</h1>
          <TagsInput
            align="vertical"
            className="w-full"
            name="investigations"
            state={investigations}
            setState={setInvestigations}
          />
        </div>
      </div>

      {/* Medicine */}

      <div className="flex flex-wrap flex-col md:flex-row justify-center mt-10">
        <div>
          {textAreas.map((textArea, ids) => {
            const key = textArea - ids
            return (
              <div className="flex flex-row" key={key}>
                <div>
                  <AppButton
                    className="mt-2 mr-2"
                    onClick={() => handleRemoveTextArea(ids)}
                  >
                    X
                  </AppButton>
                </div>
                <div>
                  <textarea
                    className="p-2 min-h-[50px] max-w-full"
                    placeholder="Enter medicine name"
                    value={textArea.value || ""}
                    onChange={(e) => handleChange(ids, e)}
                  />
                </div>
              </div>
            )
          })}
          <div className="flex flex-row">
            <AppButton className="mx-auto" onClick={() => handleAddTextArea()}>
              Add Medicine
            </AppButton>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-8">
        <AppButton onClick={handlePrescriptionSave}>
          Save Prescription
        </AppButton>
      </div>
      <PrescriptioForm prescriptions={prescriptions} />
    </AppContainer>
  )
}

export default Prescription
