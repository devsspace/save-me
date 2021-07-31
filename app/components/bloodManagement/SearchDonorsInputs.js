import AppButton from "@components/others/AppButton"
import AppDatePicker from "@components/others/AppDatePicker"
import AppDropdown from "@components/others/AppDropdown"
import bloodGroups from "@configs/fakeData/bloodGroups"
import districts from "@configs/fakeData/districts"
import donorEligibility from "@configs/fakeData/donorEligibility"
import { HiHeart, HiSearch } from "react-icons/hi"

export default function SearchDonorsInputs() {
  
  return (
    <div className="flex flex-col justify-center space-y-4">
      <div>
        <h1 className="text-3xl font-bold">Search Donors</h1>
        <p className="text-xs sm:text-base">
          "Excuses never save a life, Blood donation does
          <HiHeart className="text-red-500 inline" />
          ."
        </p>
      </div>
      <div className="flex space-x-3">
        <AppDropdown data={bloodGroups} />
        <AppDropdown data={districts} />
      </div>
      <div className="flex space-x-3">
        <AppDatePicker />
        <AppDropdown data={donorEligibility} />
      </div>
      <div className="flex justify-center">
        <AppButton Icon={HiSearch}>Search</AppButton>
      </div>
    </div>
  )
}
