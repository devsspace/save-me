import AppHeader from "@components/Headers/AppHeader"
import AppButtonV2 from "@components/others/AppButtonV2"
import { BsFillPeopleFill } from "react-icons/bs"
import { FaUserEdit } from "react-icons/fa"

export default function ConsultationHeader() {
  return (
    <AppHeader
      title={
        <>
          Consult A Doctor Anytime By
          <span className="text-primary dark:text-primary underline">
            {" "}
            Video Call
          </span>
        </>
      }
      others={
        <div className="flex justify-center md:justify-start space-x-3">
          <AppButtonV2
            Icon={BsFillPeopleFill}
            textPrimary="Available Now"
            textSecondary="Doctors"
          />
          <AppButtonV2
            Icon={FaUserEdit}
            textPrimary="As Doctor"
            textSecondary="Signup"
          />
        </div>
      }
      text="We follow a strict verification process for every doctor providing online medical services On 'SAVE ME'. Our team manually verifies necessary documents, registrations, and certifications for every doctor!"
      imgURL="/images/Consultation.svg"
    />
  )
}
