import React from "react"
import { AiFillNotification } from "react-icons/ai"
import { BiDonateBlood } from "react-icons/bi"
import { TiInputChecked } from "react-icons/ti"

const SaveLives = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-red-500 md:text-5xl text-center md:my-5">
          We Save Lives
        </h1>
        <p className="text-center text-sm sm:text-xl mt-5">
          Find blood donors near your location and make a blood
        </p>
        <p className="text-center text-xl">request in less than 5 minutes.</p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 my-10">
          <div className="text-center grid justify-items-center">
            <BiDonateBlood className="text-7xl text-red-500" />
            <h1 className="text-xl">Find Blood</h1>
            <p className="">Find blood donors near your location</p>
          </div>
          <div className="text-center grid justify-items-center">
            <AiFillNotification className="text-7xl text-green-500" />
            <h1 className="text-xl">Get Instant notified</h1>
            <p>Get notified about requests instantly</p>
          </div>
          <div className="text-center grid justify-items-center">
            <TiInputChecked className="text-7xl text-blue-500" />
            <h1 className="text-xl">Forever Access</h1>
            <p>Foreever access, Save Life Connect is forever Free!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SaveLives
