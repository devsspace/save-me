import { TD, TD2 } from "@components/others/Table"

const DonorCard = ({ donor }) => {
  const { name, phoneNumber, profilePic, email, bloodGroup, location, eligibility } = donor

  return (
    <tr>
      <TD2 image={profilePic} line1={name} line2={email} />
      <TD>{bloodGroup}</TD>
      <TD>{location}</TD>
      <TD>{phoneNumber}</TD>
      <TD>
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            eligibility == "eligible"
              ? "bg-green-100 text-green-800 dark:bg-green-700"
              : "bg-red-100 text-red-800 dark:bg-red-700"
          }`}
        >
          {eligibility === "eligible" ? "Eligible" : "Not eligible"}
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

export default DonorCard
