import AppButton from "@components/others/AppButton"
import AppDropdown from "@components/others/AppDropdown"
import consultationFees from "@configs/fakeData/consultationFees"
import consultingSpecialities from "@configs/fakeData/consultingSpecialities"
import doctorsActiveSorting from "@configs/fakeData/doctorsActiveSorting"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsFilterLeft } from "react-icons/bs"

const DocorsFilterForm = () => {
  const initialFilterData = {
    speciality: "Heart",
    consultationFee: "৳ 49",
    available: "Online Now",
  }
  const [filterData, setFilterData] = useState(initialFilterData)

  const router = useRouter()
  const handleFilter = () => {
    router.push("/coming-soon")
  }
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="w-full md:w-56">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            Search by specialty
          </div>
          <AppDropdown
            name="speciality"
            state={filterData}
            setState={setFilterData}
            className="h-10 my-3"
            data={consultingSpecialities}
          />
        </div>
        <div className="w-full md:w-56">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            <span className="text-red-400 mr-1" /> Search by Consultation Fees
          </div>
          <AppDropdown
            name="consultationFee"
            state={filterData}
            setState={setFilterData}
            className="h-10 my-3"
            data={consultationFees}
          />
        </div>
        <div className="w-full md:w-56">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            <span className="text-red-400 mr-1" /> Search by availability
          </div>
          <AppDropdown
            name="available"
            state={filterData}
            setState={setFilterData}
            className="h-10 my-3"
            data={doctorsActiveSorting}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <AppButton onClick={handleFilter} Icon={BsFilterLeft}>
          Filter
        </AppButton>
      </div>
    </div>
  )
}

export default DocorsFilterForm
