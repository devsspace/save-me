import { successAlert } from "@components/others/Alerts"
import AppButton from "@components/others/AppButton"
import AppDatePicker from "@components/others/AppDatePicker"
import { Table, TD } from "@components/others/Table"
import useRatingClient from "@hooks/useRatingClient"
import { useRouter } from "node_modules/next/dist/client/router"
import React, { useState } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

const DoctorsInfo = ({ doctor }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [bookingDate, setBookingDate] = useState({bookingDate: new Date()})
  
  const router = useRouter()
  const { doctorId } = router.query
  const {
    profilePic,
    name,
    degrees,
    specializations,
    experience,
    bmdcNumber,
    ratings,
    active,
  } = doctor
  const { ratingIcons } = useRatingClient(4.5)
  
  const availableTime = [
    "10:30", "12:00", "2:00", "4:00"
  ]

  const [selectedTime, setSelectedTime] = useState(availableTime[0])


  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            {/* Left Side */}
            <div className="w-full md:w-3/12 md:mx-2">
              {/* Profile Card */}
              <div className="bg-white p-3 border-t-4 border-green-400">
                <div className="image overflow-hidden">
                  <img
                    className="h-28 w-28 mx-auto rounded-full"
                    src={
                      profilePic ||
                      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRvY3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    }
                    alt=""
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  {name}
                </h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">
                  {degrees || "MS(medicine), FCPS, MBBS"}
                </h3>
                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6 text-error">
                  {specializations || "Surgery Neurology"}
                </p>
                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span
                      className={`ml-auto px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        !active
                          ? "bg-green-300 text-green-800"
                          : "bg-red-300 text-red-800"
                      }`}
                    >
                      {!active ? "Active" : "Inactive"}
                    </span>
                    {/* <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span> */}
                  </li>
                  <li className="flex items-center py-3">
                    <span>BMDC Number</span>
                    <span className="ml-auto">{bmdcNumber || "A01010101"}</span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Total Experience</span>
                    <span className="ml-auto">{experience || "5+ years"}</span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Rating</span>

                    <span className="ml-auto">
                      &#11088;&#11088;&#11088;&#11088;
                    </span>
                  </li>
                </ul>
              </div>
              {/* End of profile card */}
              <div className="my-4" />
            </div>
            {/* Right Side */}
            <div className="w-full md:w-9/12 mx-2 h-64">
              {/* Profile tab */}
              {/* About Section */}
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">Jane</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2">Doe</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2">Female</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">+11 998001001</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Current Address
                      </div>
                      <div className="px-4 py-2">
                        Beech Creek, PA, Pennsylvania
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Permanant Address
                      </div>
                      <div className="px-4 py-2">
                        Arlington Heights, IL, Illinois
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email.</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href="mailto:jane@example.com"
                        >
                          jane@example.com
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Birthday</div>
                      <div className="px-4 py-2">Feb 06, 1998</div>
                    </div>
                  </div>
                </div>
                <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                  Show Full Information
                </button>
              </div>
              {/* End of about section */}

              <div className="my-4" />

              {/* Experience and education */}
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Experience</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">
                          Dhaka Medical College
                        </div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                        <div className="text-gray-500 text-xs">
                          Assistant Professor
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            fill="#fff"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Education</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">
                          Masters Degree in Oxford
                        </div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Bachelors Degreen in LPU
                        </div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End of Experience and education grid */}
              </div>
              {/* End of profile tab */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-32">
        <AppButton
          onClick={() => router.push(`/payment-process?doctor=${doctorId}`)}
        >
          Consult now
        </AppButton>

        <AppButton
          className="ml-5 justify-center"
          onClick={() => setModalOpen(true)}
        >
          Book
        </AppButton>
      </div>
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
          <AppButton onClick={() => {
            successAlert()
            setModalOpen(false)
          }}>Book</AppButton>
        </div>
      )}
    </div>
  )
}

export default DoctorsInfo
