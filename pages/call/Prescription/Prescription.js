import AppContainer from "@components/others/AppContainer"
import TagsInput from "@components/others/TagsInput"
import React, { useState } from "react"

const Prescription = () => {
  const [complaints, setComplaints] = useState(["pain"])
  const [investigations, setInvestigations] = useState(["x-ray"])
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
            placeholder="Your degree"
          />
        </div>
        <div>
          <h1>Investigations</h1>
          <TagsInput
            className="w-full"
            name="investigations"
            state={investigations}
            setState={setInvestigations}
            placeholder="Your degree"
          />
        </div>
      </div>

      {/* Medicine */}
    </AppContainer>
  )
}

export default Prescription
