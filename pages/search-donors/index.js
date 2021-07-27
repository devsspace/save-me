import DarkMode from "@components/DarkMode"
import AppButton from "@components/others/AppButton"
import AppDatePicker from "@components/others/AppDatePicker"
import AppDropdown from "@components/others/AppDropdown"
import districtsData from "@configs/fakeData/districts"
import Image from "next/image"
import { HiSearch } from "react-icons/hi"

export default function SearchDonorsPage() {
  const bloodGroups = [
    { id: 1, name: "A+" },
    { id: 2, name: "A-" },
    { id: 3, name: "B+" },
    { id: 4, name: "B-" },
    { id: 5, name: "O+" },
    { id: 6, name: "O-" },
    { id: 7, name: "AB+" },
    { id: 8, name: "AB-" },
  ]
  const donors = [
    { id: 2, name: "Eligible" },
    { id: 1, name: "All" },
  ]
  return (
    <section className="container mx-auto p-5 md:p-0">
      <DarkMode />
      <h1 className="text-3xl font-bold mt-5 mb-2">Search Donors</h1>
      <div className="flex justify-between">
        <AppDropdown data={bloodGroups} />
        <AppDropdown data={districtsData} />
        <AppDatePicker />
        <AppDropdown data={districtsData} />
        <AppButton className="h-9" Icon={HiSearch} />
        <div className="hidden md:block">
          <Image
            src="/images/searchingBloodDonor.svg"
            height={450}
            width={450}
          />
        </div>
      </div>
    </section>
  )
}
