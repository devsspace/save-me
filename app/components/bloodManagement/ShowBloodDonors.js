import BloodDonor from "@components/bloodManagement/BloodDonor"

export default function ShowBloodDonors({ donors }) {
  return (
    <>
      <p className="font-bold text-center mb-3">
        Looks Like We've Found Some Heroes 😎!
      </p>
      <section
        className="container mx-auto grid justify-center
  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 md:px-24"
      >
        {donors.map((donor) => (
          <BloodDonor key={donor._id} donorInfo={donor} />
        ))}
      </section>
    </>
  )
}
