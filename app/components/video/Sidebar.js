import AppButton from "@components/others/AppButton"
import { Table, TD } from "@components/others/Table"
import { getWaitingList } from "app/api/index"
import { useUserContext } from "app/contexts/UserContext"
import { SocketContext } from "app/contexts/videoContext"
import React, { useContext, useEffect, useState } from "react"

const Sidebar = ({ children }) => {
  const { callAccepted, name, setName, callEnded, leaveCall, callUser, socket } =
    useContext(SocketContext)
  const [patients, setPatients] = useState([])
  const doctorId = "611e7e4bfc2eef2380795f97"
  const { currentUser } = useUserContext()
  const isDoctor = currentUser._id === doctorId

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await getWaitingList(doctorId)
        setPatients(data)
      } catch (error) {
        console.log(error)
      }
    }
    if(isDoctor) get()
  }, [])

    socket.on("patient-added", (newPatient) => {
      setPatients([...patients, newPatient])
     
    })
    socket.on("patient-removed", (patientId) => {
      setPatients(patients?.filter(p => p.patientId !== patientId))
    })

  return (
    <div className="w-[90%] lg:w-1/2 my-10 mx-auto">
      {callAccepted && !callEnded && (
        <AppButton className="justify-center bg-error my-5" onClick={leaveCall}>End Call</AppButton>
      )}
      {patients.length ? (
        patients.map((patient, i) => (
          <Table>
            <tr>
              <TD>
                <span>{i+1}</span>
              </TD>
              <TD className="w-1/2">
                <span>{patient.name}</span>
              </TD>
              <TD>
                <AppButton
                  className="justify-center"
                  onClick={() =>
                    callUser(patient.patientId, currentUser.name, patient.name)
                  }
                >
                  Call
                </AppButton>
              </TD>
            </tr>
          </Table>
        ))
      ) : (
        <h1 className="text-center">
          {isDoctor
            ? "No patients in the waiting list"
            : "Please wait for the doctor to call."}
        </h1>
      )}

      {children}
    </div>
  )
}

export default Sidebar
