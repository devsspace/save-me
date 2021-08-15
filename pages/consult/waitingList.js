import withAuth from "@components/auth/withAuth"
import { getWaitingList } from "app/api/index"
import AppButton from "app/components/others/AppButton"
import { useUserContext } from "app/contexts/UserContext"
import { useEffect, useState } from "react"
import { io } from "socket.io-client"

const socket = io("http://localhost:5000")

const waitingList = () => {
  const [patients, setPatients] = useState([])
  const { currentUser } = useUserContext()

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await getWaitingList()
        setPatients(data)

      } catch (error) {
      }
    }
    get()
  }, [])

  socket.on("update-patient", (patient) => {
    setPatients([...patients, patient])
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('add-patient', {
      id: currentUser._id,
      name: currentUser.name,
      phoneNumber: currentUser.phoneNumber,
    })
  }

  return <div>
  <form onSubmit={handleSubmit}>
    {
      patients.length && patients.map((patient, i) => <li>{i+1}...{patient.name}</li>)
    }
    <AppButton>Join</AppButton>
  </form>
  </div>
}

export default withAuth(waitingList)
