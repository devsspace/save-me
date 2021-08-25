// import withAuth from "@components/auth/withAuth"
// import { Table, TableBody, TD } from "@components/others/Table"
// import { getWaitingList } from "app/api/index"
// import AppButton from "app/components/others/AppButton"
// import { useUserContext } from "app/contexts/UserContext"
// import { useRouter } from "next/router"
// import { useEffect, useState } from "react"
// import { io } from "socket.io-client"

// // const socket = io("http://localhost:5000")
// const socket = io("https://save-me-dev.herokuapp.com")

// const waitingList = () => {
//   const [patients, setPatients] = useState([])
//   const { currentUser } = useUserContext()
//   const router = useRouter()
//   const { doctorId } = router.query
//   const [joined, setJoined] = useState(false)

//   useEffect(() => {
//     const get = async () => {
//       try {
//         const { data } = await getWaitingList(doctorId)
//         setPatients(data)
//         console.log(data.find((p) => p.patientId === currentUser._id))
//         if (data.find((p) => p.patientId === currentUser._id)) setJoined(true)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     get()
//   }, [])

//   socket.on("update-patient", (patient) => {
//     if(!patient){
//       return setPatients(patients.filter(p => p.patientId !== currentUser._id))
//     }
//     return setPatients([...patients, patient])
//   })

//   const handleJoin = () => {
//     socket.emit("add-patient", {
//       patientId: currentUser._id,
//       doctorId,
//       name: currentUser.name,
//       phoneNumber: currentUser.phoneNumber,
//     })
//     setJoined(true)
//   }
//   const handleCancel = () => {
//     socket.emit("remove-patient", {patientId: currentUser._id})
//     setJoined(false)
//   }

//   return (
//     <div className="">
//       <h1 className="title">Waiting List</h1>
//       <Table>
//         {patients.length ?
//           patients.map((patient) => (
//             <TableBody>
//               <TD>
//                 {patient.serial}. {patient.name}
//               </TD>
//               <TD>{patient.patientId === currentUser._id && "Estimated: 1 min"}</TD>
//               <TD>{patient.patientId === currentUser._id && <AppButton onClick={handleCancel} className="justify-center" >Cancel</AppButton>}</TD>
//             </TableBody>
//           )) : <TD>No patients in the waiting list, consult now!</TD>}
//       </Table>
//       <AppButton
//         className="w-56 my-5 mx-auto"
//         onClick={handleJoin}
//         disabled={joined}
//       >
//         Join the waiting list
//       </AppButton>
//     </div>
//   )
// }

// export default withAuth(waitingList)
import React from "react"

const index_ = () => {
  return (
    <div />
  )
}

export default index_