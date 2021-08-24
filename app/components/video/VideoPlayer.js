import AppButton from "@components/others/AppButton"
import { useUserContext } from "app/contexts/UserContext"
import { SocketContext } from "app/contexts/videoContext"
import React, { useContext } from "react"
import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai"
import { FiCamera, FiCameraOff } from "react-icons/fi"

const VideoPlayer = () => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
    socket,
    camera,
    setCamera,
    audio,
  } = useContext(SocketContext)
  const { currentUser } = useUserContext()
  const doctorId = "611e7e4bfc2eef2380795f97"

  function vidOff() {
    // myVideo.current.pause()
    myVideo.current.src = ""
    // localstream.getTracks()[0].stop()
  }

  socket.emit("start-call", currentUser._id, doctorId)

  return (
    <div className="flex justify-evenly flex-wrap my-5">
      <div className="relative">
        <h5 className="text-center">{currentUser.name || "Me"}</h5>
        {stream ? (
          <div>
            <div>
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className="rounded-lg"
              />
            </div>
          </div>
        ) : (
          <div className="bg-gray-600 text-white h-[480px] w-[640px] flex flex-col items-center justify-center rounded-2xl">
            <img src={currentUser.profilePic} alt="" className="h-20 w-20 rounded-full" />
            <p className="text-white">Allow permission to start</p>
            
          </div>
        )}

        <div className="flex justify-center space-x-3 absolute bottom-5 left-[45%]">
          <AppButton
            className="justify-center rounded-full h-8 w-8"
            onClick={() => setCamera(!camera)}
          >
            {camera ? <FiCamera /> : <FiCameraOff />}
          </AppButton>

          <AppButton className="justify-center rounded-full h-8 w-8">
            {audio ? <AiOutlineAudio /> : <AiOutlineAudioMuted />}
          </AppButton>
        </div>
      </div>
      {callAccepted && !callEnded && (
        <div>
          <div>
            <h5 className="text-center">
              {currentUser._id === doctorId ? call.patientName : call.docName}
            </h5>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoPlayer
