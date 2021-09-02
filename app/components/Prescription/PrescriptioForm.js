import AppButton from "@components/others/AppButton"
import AppContainer from "@components/others/AppContainer"
import { useUserContext } from "app/contexts/UserContext"
import React from "react"
import PDF from "react-to-pdf"

const PrescriptioForm = ({ prescriptions }) => {
  const ref = React.createRef()
  const options = {
    orientation: "portrait",
    unit: "in",
    format: [8, 6],
  }
  const { currentUser } = useUserContext()
  const { name = "", degress = [], speciality = [], bmdcNumber = "" } = currentUser
  const { complaints = [], investigations = [], textAreas } = prescriptions
  const complaintsInString = complaints.join(", ")
  const investigationsInString = investigations.join(", ")
  const degressInString = degress.join(", ")
  const specialityInString = speciality.join(", ")
  return (
    <>
      <AppContainer>
        <div ref={ref} className="mt-20">
          <img
            src="https://i.ibb.co/DLGXhqT/moja2.png"
            width={50}
            height={50}
            objectFit="contain"
            className="mx-auto"
            alt="Brand Logo"
          />
          <h1 className="text-center text-primary text-2xl">SaveMe</h1>
          <div>
            <h1 className="text-xl text-primary">Dr. {name}</h1>
            <p>{degressInString}</p>
            <p>{specialityInString}</p>
            <p>BMDC Reg. No {bmdcNumber}</p>
          </div>
          <hr className="mt-6 border-primary" />
          <div className="flex flex-row justify-evenly p-2">
            <h1>Pationt Name: Hablu Howaladar</h1>
            <h1>Gender: Male</h1>
            <h1>Age: 12y</h1>
            <h1>Weight: 42 Kg</h1>
          </div>
          <hr className=" border-primary" />

          <div className="flex flex-wrap flex-row">
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
              className={`w-9/12 border-l border-solid border-primary ${
                !textAreas ? "min-h-[500px]" : "h-auto"
              }`}
            >
              <div className="m-10">
                <h1 className="text-4xl">&#x211E;</h1>
                {textAreas?.map(({ value }) => (
                  <div className="mt-10">
                    <ol>
                      <li key={value}>{value}</li>
                    </ol>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
      <div className="flex flex-wrap flex-row min-h-full">
        <AppButton className="mx-auto">
          <PDF
            targetRef={ref}
            filename="Prescription.pdf"
            options={options}
            x={0.3}
            y={0.3}
            scale={0.5}
          >
            {({ toPdf }) => <button onClick={toPdf}>Download pdf</button>}
          </PDF>
        </AppButton>
      </div>
    </>
  )
}

export default PrescriptioForm
