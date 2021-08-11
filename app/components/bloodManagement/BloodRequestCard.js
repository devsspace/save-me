import { errorAlert, successAlert } from "@components/others/Alerts"
import AppDropdown from "@components/others/AppDropdown"
import { TD, TD2 } from "@components/others/Table"
import { updateRequest } from "app/api"
import { useState } from "react"
import { AiFillEdit } from "react-icons/ai"
import { MdCancel } from "react-icons/md"
import { TiTick } from "react-icons/ti"

const BloodRequestCard = ({ request }) => {
  const { bloodGroup, location, requestedAt, date, numberOfBags, requestedBy, status } = request
  const {name, phoneNumber, profilePic, email } = requestedBy

  const [editable, setEditable] = useState(false)

  const statuses = [
    { id: 1, name: "Pending" },
    { id: 2, name: "Confirmed" },
    { id: 3, name: "Completed" },
  ]
  const [requestStatus, setRequestStatus] = useState({ status })

  const handleStatusChange = async () => {
    const confirm = window.confirm("Are you sure?")

    if (confirm) {
      try {
        const { data } = await updateRequest({
          ...request,
          status: requestStatus.status,
        })
        if (data._id) {
          setEditable(false)
          return successAlert("Success")
        }
        setRequestStatus({ status })
        errorAlert(data?.message)
      } catch (error) {
        errorAlert(error.message)
      }
    }
  }

  return (
    <tr>
      <TD2 image={profilePic} line1={name} line2={email} />
      <TD>{bloodGroup}</TD>
      <TD>{location}</TD>
      <TD>{phoneNumber}</TD>
      <TD>{date.slice(0, 10)}</TD>
      <TD>
        <AppDropdown
          name="status"
          data={statuses}
          state={requestStatus}
          setState={setRequestStatus}
          className={`text-center ${
            requestStatus.status === "Pending"
              ? "bg-red-500 dark:bg-red-700"
              : requestStatus.status === "Confirmed"
              ? "bg-yellow-500 dark:bg-yellow-600"
              : "bg-green-500 dark:bg-green-700"
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

export default BloodRequestCard
