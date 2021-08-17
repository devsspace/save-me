import { SocketContext } from "app/contexts/videoContext"
import React, { useContext } from "react"

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext)

  return (
    <div className="flex justify-evenly flex-wrap my-5">
      {stream ? (
        <div>
          <div>
            <h5 className="text-center">{name || "Me"}</h5>
            <video playsInline muted ref={myVideo} autoPlay className="rounded-lg" />
          </div>
        </div>
      ) : (
        <p>Allow permission to start</p>
      )}
      {callAccepted && !callEnded && (
        <div>
          <div>
            <h5 className="text-center">{call.name || "User"}</h5>
            <video playsInline ref={userVideo} autoPlay className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoPlayer
