import { TD, TD2 } from "@components/others/Table"

const DonationCard = ({ donation }) => {
  const { askedBy, askedTo, details, isCompleted } = donation

  return (
    <tr>
      <TD2 image={askedBy.profilePic} line1={askedBy.name} line2={askedBy.phoneNumber} />
      <TD2 image={askedTo.profilePic} line1={askedTo.name} line2={askedTo.phoneNumber} />
      <TD>{askedTo.bloodGroup}</TD>
      <TD>{askedTo.location}</TD>
      <TD>{details}</TD>
      <TD>
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            isCompleted
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isCompleted || "Pending"}
        </span>
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
