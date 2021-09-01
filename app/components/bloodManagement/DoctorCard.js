import { errorAlert, successAlert } from "@components/others/Alerts"
import AppDropdown from "@components/others/AppDropdown"
import { TD, TD2 } from "@components/others/Table"
import { updateDoctor } from "app/api/index"
import { useState } from "react"
import { AiFillEdit } from "react-icons/ai"
import { MdCancel } from "react-icons/md"
import { TiTick } from "react-icons/ti"

const DoctorCard = ({ doctor }) => {
  const { name, phoneNumber, profilePic, email, bmdcNumber, consultationFee, isVerifiedDoctor, _id: doctorId } = doctor
  const [editable, setEditable] = useState(false)

  const statuses = [
    { id: 1, name: "Not Verified" },
    { id: 2, name: "Verified" },
  ]

  const [doctorVerification, setDoctorVerification] = useState({ isVerifiedDoctor: isVerifiedDoctor })
console.log(doctorVerification.isVerifiedDoctor)
  const handleStatusChange = async () => {

    const confirm = window.confirm("Are you sure?")

    if (confirm) {
      console.log(doctorVerification)
      try {
        const { data } = await updateDoctor(doctorId, {
          ...doctor,
          isVerifiedDoctor: doctorVerification.isVerifiedDoctor,
        })
        if (data._id) {
          setEditable(false)
          return successAlert("Success")
        }
        setDoctorVerification({ isVerifiedDoctor })
        errorAlert(data?.message)
      } catch (error) {
        errorAlert(error.message)
      }
    }
  }


  return (
    <tr>
      <TD2 image={profilePic} line1={name} line2={email} />
      <TD>{phoneNumber}</TD>
      <TD>{bmdcNumber}</TD>
      <TD>{consultationFee}</TD>
      <TD>
        <AppDropdown
          name="isVerifiedDoctor"
          data={statuses}
          state={doctorVerification}
          setState={setDoctorVerification}
          className={`text-center ${
            doctorVerification.isVerifiedDoctor === "Verified"
            ? "!bg-green-500 dark:bg-green-700"
              : "!bg-red-500 dark:bg-red-700"
          }`}
          optionClassName="!pl-3"
          disabled={!editable}
        />
      </TD>

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {editable ? (
          <span className="flex">
            <a
              className="text-red-600 hover:bg-red-700 hover:text-red-200 rounded-full border border-red-600 py-1 px-2 mr-2 cursor-pointer"
              onClick={() => setEditable(false)}
            >
              <MdCancel />
            </a>
            <a
              className="text-green-600 hover:bg-green-700 hover:text-green-100 rounded-full border border-green-600 py-1 px-2 cursor-pointer"
              onClick={handleStatusChange}
            >
              <TiTick />
            </a>
          </span>
        ) : (
          <a
            className="flex justify-center text-blue-600 hover:bg-blue-700 hover:text-blue-200 rounded-full border border-blue-600 py-1 px-2 mr-2 cursor-pointer"
            onClick={() => setEditable(true)}
          >
            <AiFillEdit />
          </a>
        )}
      </td>
    </tr>
  )
}

export default DoctorCard
