import AppButton from "@components/others/AppButton"
import AppDatePicker from "@components/others/AppDatePicker"
import AppDropdown from "@components/others/AppDropdown"
import bloodGroups from "@configs/fakeData/bloodGroups"
import districts from "@configs/fakeData/districts"
import { searchDonor } from "app/api"
import { useDonorContext } from "app/contexts/DonorContext"
import { BiSearchAlt2 } from "react-icons/bi"
import { HiHeart } from "react-icons/hi"

export default function SearchDonorsInputs() {
  const { searchInfo, setSearchInfo, setDonors, setLoading } = useDonorContext()

  const handleSearch = async () => {
    try {
      setLoading(true)
      const { data } = await searchDonor(searchInfo)
      await setDonors(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
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
          className="!w-full md:!w-64"
          state={searchInfo}
          setState={setSearchInfo}
        />
        <AppButton
          Icon={BiSearchAlt2}
          className="w-36 z-10 flex justify-center"
          searchInfo={searchInfo}
          setSearchInfo={setSearchInfo}
          onClick={handleSearch}
        >
          Search
        </AppButton>
      </div>
    </div>
  )
}
