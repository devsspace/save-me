import InitialBloodDonors from "@components/bloodManagement/InitialBloodDonors"
import RequestBlood from "@components/bloodManagement/RequestBlood"
import ShowBloodDonors from "@components/bloodManagement/ShowBloodDonors"
import { useDonorContext } from "app/contexts/DonorContext"

export default function LoadBloodDonors() {
  const { donors } = useDonorContext()
  console.log(donors)
  let RandomComponent
  if (donors === null) RandomComponent = InitialBloodDonors
  else if (donors.length === 0) RandomComponent = RequestBlood
  else RandomComponent = ShowBloodDonors
  return (
    <section
      className="container mx-auto grid justify-center
  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 md:px-24"
    >
      <RandomComponent donors={donors} />
    </section>
  )
}
