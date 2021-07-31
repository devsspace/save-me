import AppButton from "@components/others/AppButton"
import AppDatePicker from "@components/others/AppDatePicker"
import AppDropdown from "@components/others/AppDropdown"
import bloodGroups from "@configs/fakeData/bloodGroups"
import districts from "@configs/fakeData/districts"
import donorEligibility from "@configs/fakeData/donorEligibility"
import { searchDonor } from "app/api"
import { useDonorContext } from "app/contexts/DonorContext"
import { HiHeart, HiSearch } from "react-icons/hi"

export default function SearchDonorsInputs() {
  const { searchInfo, setSearchInfo, setDonors } = useDonorContext()

  const handleSearch = async () => {
    // console.log(searchInfo)
    // setDonors([])
    // FIXME: shohaul will fix this later when backend route is completed <3
    try {
      const { data } = await searchDonor(searchInfo)
      setDonors(data)
    } catch (error) {
      console.log(error)
    }
  }

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
        <AppDropdown
          state={searchInfo}
          setState={setSearchInfo}
          name="bloodGroup"
          data={bloodGroups}
        />
        <AppDropdown
          state={searchInfo}
          setState={setSearchInfo}
          name="location"
          data={districts}
        />
      </div>
      <div className="flex space-x-3">
        <AppDatePicker
          name="date"
          state={searchInfo}
          setState={setSearchInfo}
        />
        <AppDropdown
          state={searchInfo}
          setState={setSearchInfo}
          name="eligibility"
          data={donorEligibility}
        />
      </div>
      <div className="flex justify-center">
        <AppButton
          searchInfo={searchInfo}
          setSearchInfo={setSearchInfo}
          Icon={HiSearch}
          onClick={handleSearch}
        >
          Search
        </AppButton>
      </div>
    </div>
  )
}
