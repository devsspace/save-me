import AppButton from "@components/others/AppButton"
import { useUserContext } from "app/contexts/UserContext"
import { SocketContext } from "app/contexts/videoContext"
import React, { useContext } from "react"

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext)
  const { currentUser } = useUserContext()

  const s = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "30vh",
    width: "50%",
  }

  return (
    <>
      {call.isReceivingCall && !callAccepted && !currentUser?.role.includes("doctor") && (
        <div style={s} className="flex flex-col items-center justify-center bg-gray-600 rounded-2xl">
          <div className="text-green-500 mb-3">{call?.docName?.toUpperCase()} is calling:</div>
          <AppButton onClick={answerCall}>
            Answer
          </AppButton>
        </div>
      )}
    </>
  )
}

export default Notifications
