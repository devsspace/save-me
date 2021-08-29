import AppContainer from "@components/others/AppContainer"
import React from "react"

const PrescriptioForm = ({ prescriptions }) => {
  const { complaints = [], investigations = [], textAreas } = prescriptions
  const complaintsInString = complaints.join(", ")
  const investigationsInString = investigations.join(", ")
  return (
    <AppContainer>
      <div>
        <h1 className="text-xl text-primary">Dr. Shohaul Shihab</h1>
        <p>MBBS</p>
        <p>General Physician</p>
        <p>BMDC Reg. No - A123456</p>
      </div>
      <hr className="mt-6 border-primary" />
      <div className="flex flex-row justify-evenly p-2">
        <h1>Pationt Name: Riyan Hasan</h1>
        <h1>Gender: Female</h1>
        <h1>Age: 30y</h1>
        <h1>Weight: 52 Kg</h1>
      </div>
      <hr className=" border-primary" />

      <div className="flex flex-row">
        <div className="w-3/12">
          <div className="mt-4">
            <h1 className="text-xl">Chief Compliments</h1>
            <ul>
              <li>{complaintsInString}</li>
            </ul>
          </div>
          <hr className=" border-primary mt-8" />
          <div className="mt-4">
            <h1 className="text-xl">Investigations</h1>
            <ul>
              <li>{investigationsInString}</li>
            </ul>
          </div>
          <hr className=" border-primary mt-8" />
        </div>
        <div
          className="w-9/12"
          style={{ borderLeft: "1px solid #00CFFC", height: "500px" }}
        >
          <div className="m-10">
            <h1 className="text-4xl">&#x211E;</h1>
            {textAreas?.map(({ value }) => (
              <div className="mt-10">
                <ul>
                  <li key={value}>{value}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppContainer>
  )
}

export default PrescriptioForm
