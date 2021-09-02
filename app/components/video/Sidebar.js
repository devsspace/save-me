import AppButton from "@components/others/AppButton"
import { Table, TD } from "@components/others/Table"
import Prescription from "@components/Prescription/Prescription"
import { getWaitingList } from "app/api/index"
import { useUserContext } from "app/contexts/UserContext"
import { SocketContext } from "app/contexts/videoContext"
import { useRouter } from "node_modules/next/dist/client/router"
import React, { useContext, useEffect, useState } from "react"
import { MdCancel } from "react-icons/md"
import { TiTick } from "react-icons/ti"

const Sidebar = ({ children }) => {
  const {
    callAccepted,
    name,
    setName,
    callEnded,
    leaveCall,
    callUser,
    socket,
  } = useContext(SocketContext)
  const [patients, setPatients] = useState([])
  const { currentUser } = useUserContext()

  const router = useRouter()
  const { doctorId } = router.query
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
    if (isDoctor) get()
  }, [])

  socket.on("patient-added", (newPatient) => {
    setPatients([...patients, newPatient])
  })
  socket.on("patient-removed", (patientId) => {
    setPatients(patients?.filter((p) => p.patientId !== patientId))
  })

  const handleCancel = (patientId) => {
    socket.emit("remove-patient", patientId, patients?.length, true)
  }

  return (
    <div className="w-[90%] lg:w-1/2 my-10 mx-auto">
      {callAccepted && !callEnded && (
        <AppButton className="justify-center bg-error my-5" onClick={leaveCall}>
          End Call
        </AppButton>
      )}
      {patients.length ? (
        patients.map((patient, i) => (
          <Table>
            <tr>
              <TD>
                <span>{i + 1}</span>
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

              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <span className="flex">
                  <a
                    className="text-red-600 hover:bg-red-700 hover:text-red-200 rounded-full border border-red-600 py-1 px-2 mr-2 cursor-pointer"
                    onClick={() => handleCancel(patient.patientId)}
                  >
                    <MdCancel />
                  </a>
                  <a
                    className="text-green-600 hover:bg-green-700 hover:text-green-100 rounded-full border border-green-600 py-1 px-2 cursor-pointer"
                    onClick={() => handleCancel(patient.patientId)}
                  >
                    <TiTick />
                  </a>
                </span>
              </td>
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

      {
        callAccepted && !callEnded && isDoctor &&
        <Prescription />
      }
    </div>
  )
}

export default Sidebar
