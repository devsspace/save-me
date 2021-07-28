import BloodDonor from "@components/bloodManagement/BloodDonor"
import bloodDonors from "@configs/fakeData/bloodDonors"

export default function LoadBloodDonors() {
  return (
    <section
      className="grid justify-center
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {bloodDonors.map((donor) => (
        <BloodDonor key={donor.id} donorInfo={donor} />
      ))}
    </section>
  )
}
