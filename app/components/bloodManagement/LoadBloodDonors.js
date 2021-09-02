import InitialBloodDonors from "@components/bloodManagement/InitialBloodDonors"
import RequestBlood from "@components/bloodManagement/RequestBlood"
import ShowBloodDonors from "@components/bloodManagement/ShowBloodDonors"
import AppContainer from "@components/others/AppContainer"
import LoadingSpinner from "@components/others/LoadingSpinner"
import { useDonorContext } from "app/contexts/DonorContext"

export default function LoadBloodDonors() {
  const { donors, loading } = useDonorContext()
  let RandomComponent
  if (donors === null) RandomComponent = InitialBloodDonors
  else if (donors.length === 0) RandomComponent = RequestBlood
  else RandomComponent = ShowBloodDonors
  return (
    <>
      {loading ? (
        <div className="-mt-28">
          <LoadingSpinner />
        </div>
      ) : (
        <AppContainer className="!my-0 search-donor-page">
          <RandomComponent donors={donors} />
        </AppContainer>
      )}
    </>
  )
}
