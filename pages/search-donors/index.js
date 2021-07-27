import DarkMode from "@components/DarkMode"
import AppButton from "@components/others/AppButton"
import AppDatePicker from "@components/others/AppDatePicker"
import AppDropdown from "@components/others/AppDropdown"
import districtsData from "@configs/fakeData/districts"
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
  return (
    <section className="container mx-auto">
      <DarkMode />
      <h1 className="text-3xl font-bold mt-5 mb-2">Search Donors</h1>
      <div className="flex justify-center space-x-4">
        <AppDropdown data={bloodGroups} />
        <AppDropdown data={districtsData} />
        <AppDatePicker />
        <AppButton Icon={HiSearch}>Search</AppButton>
      </div>
    </section>
  )
}
