import ViewDoctorsSlide from "@components/consultation/ViewDoctorsSlide"
import AppContainer from "@components/others/AppContainer"
import { TiArrowRightThick } from "react-icons/ti"

export default function AvailableForConsultation() {
  return (
    <AppContainer>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Available For Consultation Now</h1>
        <div className="flex items-center">
          <button className="font-poppins text-xl font-bold mr-1">
            View All
          </button>
          <TiArrowRightThick />
        </div>
      </div>
      <ViewDoctorsSlide />
    </AppContainer>
  )
}
