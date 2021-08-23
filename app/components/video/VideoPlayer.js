import { useUserContext } from "app/contexts/UserContext"
import { SocketContext } from "app/contexts/videoContext"
import React, { useContext } from "react"

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, socket } =
    useContext(SocketContext)
  const { currentUser } = useUserContext()
  const doctorId = "611e7e4bfc2eef2380795f97"

  socket.emit("start-call", currentUser._id, doctorId)
  return (
    <div className="flex justify-evenly flex-wrap my-5">
      {stream ? (
        <div>
          <div>
            <h5 className="text-center">{currentUser.name}</h5>
            <video playsInline muted ref={myVideo} autoPlay className="rounded-lg" />
          </div>
        </div>
      ) : (
        <p>Allow permission to start</p>
      )}
      {callAccepted && !callEnded && (
        <div>
          <div>
            <h5 className="text-center">{currentUser._id === doctorId ? call.patientName : call.docName}</h5>
            <video playsInline ref={userVideo} autoPlay className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoPlayer
