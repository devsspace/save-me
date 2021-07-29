import React from "react"
import { BiDonateBlood } from "react-icons/bi"

const SaveLives = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-red-500 text-5xl text-center my-5">
          We Save Lives
        </h1>
        <p className="text-center text-xl">
          Find blood donors near your location and make a blood
        </p>
        <p className="text-center text-xl">request in less than 5 minutes.</p>
        <div className="maindiv">
          <div className="1">
            <BiDonateBlood className="text-7xl text-red-500" />
            <h1 className="text-xl font-bold">Find Blood</h1>
            <p>Find blood donors near your location</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SaveLives
