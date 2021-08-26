import AppButton from "@components/others/AppButton"
import { useUserContext } from "app/contexts/UserContext"
import { SocketContext } from "app/contexts/videoContext"
import { useRouter } from "next/router"
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
    mic,
    setMic,
    userCamera,
    userMic,
  } = useContext(SocketContext)
  const { currentUser } = useUserContext()
  const router = useRouter()
  const { doctorId } = router.query

  socket.emit("start-call", currentUser._id, doctorId)

  return (
    <div className="flex justify-evenly flex-wrap my-5 max-w-[95%] mx-auto">
      <div className="relative">
        <h5 className="text-center">{currentUser.name || "Me"}</h5>
        {camera ? (
          <div>
            <div>
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className="rounded-lg mb-5"
              />
            </div>
          </div>
        ) : (
          <div className="bg-gray-600 text-white h-[480px] w-[640px] flex flex-col items-center justify-center rounded-2xl">
            <img
              src={currentUser.profilePic}
              alt=""
              className="h-20 w-20 rounded-full"
            />
            <p className="text-white">Allow permission to start</p>
          </div>
        )}

        <div className="flex justify-center space-x-3 absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <AppButton
            className="justify-center rounded-full h-8 w-8"
            onClick={() => setCamera(!camera)}
          >
            {camera ? <FiCamera /> : <FiCameraOff />}
          </AppButton>

          <AppButton
            className="justify-center rounded-full h-8 w-8"
            onClick={() => setMic(!mic)}
          >
            {mic ? <AiOutlineAudio /> : <AiOutlineAudioMuted />}
          </AppButton>
        </div>
      </div>
      {callAccepted && !callEnded && (
        <div>
          <h5 className="text-center">
            {currentUser._id === doctorId ? call.patientName : call.docName}
          </h5>
          {userCamera ? (
            <div>
              <video
                playsInline
                ref={userVideo}
                autoPlay
                className="rounded-lg"
              />
            </div>
          ) : (
            <div className="bg-gray-600 text-white h-[480px] w-[640px] flex flex-col items-center justify-center rounded-2xl">
              <video ref={userVideo} autoPlay className="hidden" />
              <p className="text-white">Camera off</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default VideoPlayer
