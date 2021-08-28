import withAuth from "@components/auth/withAuth"
import { Table, TableBody, TD } from "@components/others/Table"
import { getWaitingList } from "app/api/index"
import AppButton from "app/components/others/AppButton"
import { useUserContext } from "app/contexts/UserContext"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { AiOutlineAim } from "react-icons/ai/"
import { io } from "socket.io-client"

// const socket = io("http://localhost:5000")
const socket = io("https://save-me-dev.herokuapp.com")

const waitingList = () => {
  const [patient, setPatient] = useState({})
  const { currentUser } = useUserContext()
  const router = useRouter()
  const { doctorId } = router.query
  const [joined, setJoined] = useState(false)
  const [serial, setSerial] = useState(0)
  const [waiting, setWaiting] = useState(0)
  const [videoWindow, setVideoWindow] = useState(null)

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await getWaitingList(doctorId)
        const currentPatient = data?.find(
          (p) => p.patientId === currentUser._id
        )
        if (currentPatient) {
          setPatient(currentPatient)
          setSerial(data.indexOf(currentPatient) + 1)
          setJoined(true)
          setWaiting(data.length)
          if (!videoWindow || videoWindow.closed) {
            setVideoWindow(
              window.open(
                `/call/${doctorId}`,
                "video",
                "_blank",
                "fullscreen=yes,scrollbars=yes,status=yes"
              )
            )
          }
        } else {
          setWaiting(data?.length)
        }
      } catch (error) {
        console.log(error)
      }
    }
    get()
  }, [])

  socket.on("patient-added", (newPatient, s) => {
    if (newPatient.patientId === currentUser._id) {
      setPatient(newPatient)
      setSerial(s)
    }
    setWaiting(s)
    // if(patient.patientId !== currentUser._id){
    // }
  })

  socket.on("patient-removed", (patientId, s, byDoctor) => {
    if (patientId === currentUser._id) {
      setPatient({})
    } else {
      setSerial(s)
    }
    setWaiting(s)
    if (byDoctor) {
      router.push("/doctors")
    }
  })

  const handleJoin = () => {
    socket.emit(
      "add-patient",
      {
        patientId: currentUser._id,
        doctorId,
        name: currentUser.name,
        phoneNumber: currentUser.phoneNumber,
      },
      waiting
    )
    setJoined(true)

    setVideoWindow(
      window.open(
        `/call/${doctorId}`,
        "video",
        "_blank",
        "fullscreen=yes,scrollbars=yes,status=yes"
      )
    )
  }

  const handleCancel = () => {
    socket.emit("remove-patient", currentUser._id, waiting)
    setJoined(false)
    if (videoWindow) videoWindow.close()
  }

  return (
    <div className="">
      <h1 className="title font-bold">Waiting List</h1>
      <h2 className="my-10 mx-auto flex items-center text-shine">
        <AiOutlineAim className="mr-2 text-red-700" />{" "}
        {patient.patientId === currentUser._id
          ? `Your serial is ${serial || 0}`
          : `${waiting || 0} people waiting`}
      </h2>
      <Table>
        {patient._id ? (
          <TableBody>
            <TD>{patient.name}</TD>
            <TD>Estimated: {(serial - 1) * 3} min</TD>
            <TD>
              <AppButton onClick={handleCancel} className="justify-center">
                Cancel
              </AppButton>
            </TD>
          </TableBody>
        ) : (
          <TD>You haven't joined the waiting list yet, join now!</TD>
        )}
      </Table>
      <AppButton
        className="w-56 my-5 mx-auto"
        onClick={handleJoin}
        disabled={joined}
      >
        Join the waiting list
      </AppButton>
    </div>
  )
}

export default withAuth(waitingList)
