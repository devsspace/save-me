import AppButton from "@components/others/AppButton"
import { useUserContext } from "app/contexts/UserContext"
import { SocketContext } from "app/contexts/videoContext"
import React, { useContext } from "react"

const Notifications = () => {
  const { answerCall, call, callAccepted, callEnded } = useContext(SocketContext)
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
      {call.isReceivingCall && !callAccepted && (
        <div
          style={s}
          className="flex flex-col items-center justify-center bg-dark text-white rounded-2xl"
        >
          <audio
            src="https://www.soundjay.com/phone/phone-calling-1.mp3"
            autoPlay
            hidden
          />
          {!currentUser?.role.includes("doctor") ? (
            <>
              <div className="text-green-500 mb-3">
                {call?.docName?.toUpperCase()} is calling:
              </div>
              <AppButton onClick={answerCall}>Answer</AppButton>
            </>
          ) : (
            <>Calling to {call?.patientName?.toUpperCase()}</>
          )}
        </div>
      )}
    </>
  )
}

export default Notifications
