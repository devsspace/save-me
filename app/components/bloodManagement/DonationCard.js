import { errorAlert, successAlert } from "@components/others/Alerts"
import AppDropdown from "@components/others/AppDropdown"
import { TD, TD2 } from "@components/others/Table"
import useLineClamp from "@hooks/useLineClamp"
import { updateDonation } from "app/api"
import { useState } from "react"
import { AiFillEdit } from "react-icons/ai"
import { MdCancel } from "react-icons/md"
import { TiTick } from "react-icons/ti"

const DonationCard = ({ donation }) => {
  const { _id, askedBy, askedTo, details, date, status } = donation
  const [editable, setEditable] = useState(false)

  const statuses = [
    { id: 1, name: "Pending" },
    { id: 2, name: "Confirmed" },
    { id: 3, name: "Completed" },
  ]
  const [donationStatus, setDonationStatus] = useState({ status })

  const handleStatusChange = async () => {
    console.log(donationStatus)
    const confirm = window.confirm("Are you sure?")
    if (confirm) {
      try {
        console.log(donationStatus)
        const { data } = await updateDonation(donation._id, {
          ...donation,
          status: donationStatus.status,
        })
        if (data._id) {
          setEditable(false)
          return successAlert("Success")
        }
        setDonationStatus({ status })
        errorAlert(data?.message)
      } catch (error) {
        errorAlert(error.message)
      }
    }
  }

  return (
    <tr key={_id}>
      <TD2
        image={askedBy.profilePic}
        line1={askedBy.name}
        line2={askedBy.phoneNumber}
      />
      <TD2
        image={askedTo.profilePic}
        line1={askedTo.name}
        line2={askedTo.phoneNumber}
      />
      <TD>{askedTo.location}</TD>
      <TD>{askedTo.bloodGroup}</TD>
      <TD>{date?.slice(0, 10)}</TD>
      <TD>{useLineClamp(details, 30)}</TD>
      <TD>
        <AppDropdown
          name="status"
          data={statuses}
          state={donationStatus}
          setState={setDonationStatus}
          className={`text-center ${
            donationStatus.status === "Pending"
              ? "bg-red-500 dark:bg-red-700"
              : donationStatus.status === "Confirmed"
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

export default DonationCard
