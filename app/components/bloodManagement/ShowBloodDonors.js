import BloodDonor from "@components/bloodManagement/BloodDonor"

export default function ShowBloodDonors({ donors }) {
  return (
    <>
      {donors.map((donor) => (
        <BloodDonor key={donor._id} donorInfo={donor} />
      ))}
    </>
  )
}
