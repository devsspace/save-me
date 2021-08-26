import AppContainer from "@components/others/AppContainer"
import React from "react"
import { GiTicket } from "react-icons/gi"
import { IoIosWater } from "react-icons/io"
import { MdNotifications } from "react-icons/md"

const SaveLives = () => {
  return (
    <AppContainer>
      <div>
        <h1 className="text-center font-bold text-4xl">We Save Lives</h1>
        <p className="text-center px-5 mt-2 md:px-20 lg:px-52">
          Your donation can save the lives of many, make a difference or simply
          make you feel great about your contribution to humanity. Whatever your
          reason, whatever your motivation we welcome you to learn more about
          eligibility and benefits of donating blood with a trusted organization
          like us.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-evenly mt-5 px-5 md:px-20 lg:px-52">
          <div className="text-center justify-items-center">
            <IoIosWater className="text-5xl text-red-500 mx-auto" />
            <h1 className="text-xl font-semibold">Search Blood</h1>
            <p className="text-xs">Find blood donors near your location!</p>
          </div>
          <div className="text-center justify-items-center">
            <MdNotifications className="text-5xl text-yellow-500 mx-auto" />
            <h1 className="text-xl font-semibold">Instant Notification</h1>
            <p className="text-xs">Get notified about Requests Instantly!</p>
          </div>
          <div className="text-center justify-items-center">
            <GiTicket className="text-5xl text-primary mx-auto" />
            <h1 className="text-xl font-semibold">Forever Access</h1>
            <p className="text-xs">You Can Request For Blood Anytime!</p>
          </div>
        </div>
      </div>
    </AppContainer>
  )
}

export default SaveLives
