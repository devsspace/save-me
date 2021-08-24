import React, { createContext, useEffect, useRef, useState } from "react"
import Peer from "simple-peer"
import { io } from "socket.io-client"

const SocketContext = createContext()

const socket = io("http://localhost:5000")
// const socket = io('https://save-me-dev.herokuapp.com');

const VideoContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false)
  const [callEnded, setCallEnded] = useState(false)
  const [stream, setStream] = useState()
  const [name, setName] = useState("")
  const [call, setCall] = useState({})
  const [me, setMe] = useState("")
  const [camera, setCamera] = useState(false)

  const myVideo = useRef()
  const userVideo = useRef()
  const connectionRef = useRef()

  useEffect(() => {
    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
            setStream(currentStream)
            myVideo.current.srcObject = currentStream
          })
        }

        if(camera) startVideo()
        else {
          // myVideo.current.pause()
          // if(myVideo.current) myVideo.current.src = ""
          // currentStream.getTracks()[1].stop()
          setStream(null)

        }
    }, [camera])
    
    
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
      userVideo.current.srcObject = currentStream
    })

    peer.signal(call.signal)

    connectionRef.current = peer
  }

  const callUser = (id, docName, patientName) => {
    const peer = new Peer({ initiator: true, trickle: false, stream })
    console.log("Id to call: ", id)
    
    peer.on("signal", (data) => {
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
    })

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true)

      peer.signal(signal)
    })

    connectionRef.current = peer
  }

  const leaveCall = () => {
    setCallEnded(true)

    connectionRef.current.destroy()

    window.location.reload()
  }

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
      }}
    >
      {children}
    </SocketContext.Provider>
  )
}

export { VideoContextProvider, SocketContext }

