import BloodDonor from "@components/bloodManagement/BloodDonor"
import bloodDonors from "@configs/fakeData/bloodDonors"

export default function LoadBloodDonors() {
  return (
    <section
      className="container mx-auto grid justify-center
      grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 md:px-24"
    >
      {bloodDonors.map((donor) => (
        <BloodDonor key={donor.id} donorInfo={donor} />
      ))}
    </section>
  )
}
