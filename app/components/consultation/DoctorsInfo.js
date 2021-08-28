import DoctorAboutSection from "@components/consultation/DoctorAboutSection"
import DoctorProfileCard from "@components/consultation/DoctorProfileCard"
import DoctorsInfoButtons from "@components/consultation/DoctorsInfoButtons"
import { successAlert } from "@components/others/Alerts"
import AppButton from "@components/others/AppButton"
import AppDatePicker from "@components/others/AppDatePicker"
import { Table, TD } from "@components/others/Table"
import { useRouter } from "node_modules/next/dist/client/router"
import React, { useState } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

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
      {modalOpen && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-1/2 h-1/3 bg-gray-600 flex flex-col items-center justify-evenly rounded shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-white">Select Date: </span>
              <AppDatePicker
                name="bookingDate"
                className="h-[52px]"
                state={bookingDate}
                setState={setBookingDate}
              />
            </div>
            <div className="ml-5">
              <span className="text-white ml-5">Schedule:</span>
              <Table>
                {availableTime.map((time) => {
                  console.log(selectedTime, time)
                  return (
                    <TD
                      className={`text-dark bg-white hover:bg-primary cursor-pointer ${
                        selectedTime === time && "!bg-primary"
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </TD>
                  )
                })}
              </Table>
            </div>
          </div>
          <AppButton
            onClick={() => {
              successAlert()
              setModalOpen(false)
            }}
          >
            Book
          </AppButton>
        </div>
      )}
    </section>
  )
}

export default DoctorsInfo
