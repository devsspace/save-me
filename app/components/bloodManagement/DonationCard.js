import AppDropdown from "@components/others/AppDropdown"
import { TD, TD2 } from "@components/others/Table"
import { updateDonation } from "app/api"
import { useState } from "react"

const DonationCard = ({ donation }) => {
  const { _id, askedBy, askedTo, details, date, status } = donation

  const statuses = [
    { id: 1, name: "Pending" },
    { id: 2, name: "Confirmed" },
    { id: 3, name: "Completed" },
  ]
  const [donationStatus, setDonationStatus] = useState({status})

  const handleStatusChange = async () => {
    console.log(donationStatus)
    const confirm = window.confirm("Are you sure?")
    if(confirm){
      const { data } = await updateDonation(donation._id, donationStatus.status)
      console.log(data)
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
      <TD>{details}</TD>
      <TD>
        <span
          className={`p-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            status === "completed"
              ? "bg-green-100 text-green-800 dark:bg-green-700"
              : "bg-red-100 text-red-800 dark:bg-red-700"
          }`}
        >
        </span>
          <AppDropdown name="status" data={statuses} state={donationStatus} setState={setDonationStatus} optionClassName="!pl-3" onChange={handleStatusChange} />
      </TD>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  )
}

export default DonationCard
