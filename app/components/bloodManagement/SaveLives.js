import React from "react"
import { AiFillNotification } from "react-icons/ai"
import { BiDonateBlood } from "react-icons/bi"
import { TiInputChecked } from "react-icons/ti"

const SaveLives = () => {
  return (
    <div className="mt-16">
      <h1 className="text-green-400 text-center text-4xl">We Save Lives</h1>
      <p className="text-center mt-5 text-xl text-primary">
        Find blood donors request in less than 5 minutes
      </p>
      <div className="flex flex-col md:flex-row items-center justify-evenly mt-10">
        <div className="text-center justify-items-center">
          <BiDonateBlood className="text-5xl text-error mx-auto" />
          <h1 className="text-xl text-error">Find Blood</h1>
          <p className="text-primary">Find blood donors near your location</p>
        </div>
        <div className="text-center justify-items-center">
          <AiFillNotification className="text-5xl text-green-500 mx-auto" />
          <h1 className="text-xl text-error">Get Instant notified</h1>
          <p className="text-primary">Get notified about requests instantly</p>
        </div>
        <div className="text-center justify-items-center">
          <TiInputChecked className="text-5xl text-primary mx-auto" />
          <h1 className="text-xl text-error">Forever Access</h1>
          <p className="text-primary">Foreever access, Save Life Connect</p>
        </div>
      </div>
    </div>
  )
}

export default SaveLives
