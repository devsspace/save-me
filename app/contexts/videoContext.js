import { errorAlert } from "@components/others/Alerts"
import React, { createContext, useEffect, useRef, useState } from "react"
import Peer from "simple-peer"
import { io } from "socket.io-client"

// let Peer

// const [Peer, setPeer] = useState()
// React.useEffect(() => {
//   const fn = async () => {
//     const peerJs = (await import("peerjs")).default
//     // set it to state here
//     setPeer(peerJs)
//   }
//   fn()
// }, [])

const SocketContext = createContext()

// const socket = io("http://localhost:5000")
const socket = io("https://save-me-dev.herokuapp.com")

const VideoContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false)
  const [callEnded, setCallEnded] = useState(false)
  const [stream, setStream] = useState(null)
  const [name, setName] = useState("")
  const [call, setCall] = useState({})
  const [me, setMe] = useState("")
  const [camera, setCamera] = useState(true)
  const [mic, setMic] = useState(true)
  const [userCamera, setUserCamera] = useState(false)
  const [userMic, setUserMic] = useState(false)

  const myVideo = useRef()
  const userVideo = useRef()
  const connectionRef = useRef()


  // useEffect(() => {
  //   import("peerjs").then(({ default: P }) => {
  //     Peer = P
  //   })
  // }, [])

  useEffect(() => {
    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: camera, audio: mic })
        .then((currentStream) => {
          setStream(currentStream)
          if (myVideo.current) myVideo.current.srcObject = currentStream
        })
        .catch(() => errorAlert("Please Allow Your Camera to Continue"))
    }

    if (camera || mic) {
      startVideo()
    }

    socket.emit("cm", camera, mic)
    // else if (!mic) stream.getTracks()[0].stop()
    // else if(!camera) {
    //   stream.getVideoTracks()[1].enabled = false
    //   stream.getTracks()[1].stop()
    //   setStream(null)
    // }
  }, [camera, mic])

  if (camera === false) {
    stream.getTracks().forEach((track) => {
      if (track.kind === "video") {
        track.enabled = false
        track.stop()
      }
    })
  }

  if (mic === false) {
    stream.getTracks().forEach((track) => {
      console.log(track)
      if (track.kind === "audio") {
        track.enabled = false
        track.stop()
      }
    })
  }

  socket.on("cm", (c, m) => {
    // console.log(userCamera)
    setUserCamera(c)
    setUserMic(m)
  })

  socket.on("callUser", ({ signal, from, docName, patientName }) => {
    console.log("Call coming from: ", from)

    setCall({ isReceivingCall: true, from, docName, patientName, signal })
  })

  socket.on("me", (id) => {
    setMe(id)
  })

  const answerCall = () => {
    setCallAccepted(true)

    const peer = new Peer({ initiator: false, trickle: false, stream })
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: call.from })
    })

    peer.on("stream", (currentStream) => {
      if (userVideo.current) userVideo.current.srcObject = currentStream
      console.log(userVideo.current)
      setUserCamera(currentStream.getVideoTracks()[0]?.enabled)
      setUserMic(currentStream.getAudioTracks()[0]?.enabled)
    })

    peer.signal(call.signal)

    connectionRef.current = peer
  }

  const callUser = (id, docName, patientName) => {
    const peer = new Peer({ initiator: true, trickle: false, stream })
    console.log("Id to call: ", id)

    peer.on("signal", (data) => {
      console.log("signal")
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        docName,
        patientName,
      })
    })

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream
      setUserCamera(currentStream.getVideoTracks()[0]?.enabled)
      setUserMic(currentStream.getAudioTracks()[0]?.enabled)
    })

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true)

      peer.signal(signal)
    })

    connectionRef.current = peer
  }

  const leaveCall = () => {
    connectionRef.current.destroy()
    socket.emit("callEnded")
    setCallEnded(true)
    setCamera(false)
  }

  socket.on("callEnded", () => {
    setCallEnded(true)
    setCamera(false)
    // window.location.reload()
  })

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        socket,
        camera,
        setCamera,
        mic,
        setMic,
        userCamera,
        userMic,
      }}
    >
      {children}
    </SocketContext.Provider>
  )
}

export { VideoContextProvider, SocketContext }
