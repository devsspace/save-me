import DoctorAboutSection from "@components/consultation/DoctorAboutSection"
import DoctorInfoBooking from "@components/consultation/DoctorInfoBooking"
import DoctorProfileCard from "@components/consultation/DoctorProfileCard"
import DoctorsInfoButtons from "@components/consultation/DoctorsInfoButtons"
import { useRouter } from "node_modules/next/dist/client/router"
import React, { useState } from "react"

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
      <DoctorInfoBooking modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </section>
  )
}

export default DoctorsInfo
