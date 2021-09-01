import DoctorAboutSection from "@components/consultation/DoctorAboutSection"
import DoctorProfileCard from "@components/consultation/DoctorProfileCard"
import DoctorsInfoButtons from "@components/consultation/DoctorsInfoButtons"
import AppButtonV2 from "@components/others/AppButtonV2"
import AppModal from "@components/others/AppModal"
import { useRouter } from "node_modules/next/dist/client/router"
import React, { useState } from "react"
import { GiRose } from "react-icons/gi"

const DoctorsInfo = ({ doctor }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [bookingDate, setBookingDate] = useState({ bookingDate: new Date() })

  const router = useRouter()
  const { doctorId } = router.query
  const {
    name,
    bmdcNumber,
    degrees = [],
    speciality = [],
    consultationFee,
    totalExperienceYears,
    profilePic,
    active,
  } = doctor

  const availableTime = ["10:30", "12:00", "2:00", "4:00"]
  const [selectedTime, setSelectedTime] = useState(availableTime[0])

  const degreesInString = degrees.join(", ")
  const specialityInString = speciality.join(", ")
  return (
    <section>
      <div onClick={() => setModalOpen(false)} className="bg-gray-100">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <DoctorProfileCard
              name={name}
              degreesInString={degreesInString}
              specialityInString={specialityInString}
              active={active}
              bmdcNumber={bmdcNumber}
              totalExperienceYears={totalExperienceYears}
              consultationFee={consultationFee}
              profilePic={profilePic}
            />
            <DoctorAboutSection name={name} />
          </div>
        </div>
      </div>
      <DoctorsInfoButtons
        router={router}
        setModalOpen={setModalOpen}
        doctorId={doctorId}
      />
      <AppModal isOpen={modalOpen} setIsOpen={setModalOpen} title="Test Title">
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent your an
            email with all of the details of your order.
          </p>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="inline-flex justify-center"
            onClick={() => setModalOpen(false)}
          >
            <AppButtonV2
              textPrimary="Thank You"
              textSecondary="Okay"
              Icon={GiRose}
            />
          </button>
        </div>
      </AppModal>
    </section>
  )
}

export default DoctorsInfo
