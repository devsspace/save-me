import DarkMode from "@components/DarkMode"
import AppButton from "@components/others/AppButton"
import AppDropdown from "@components/others/AppDropdown"
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
    <section>
      <DarkMode />
      <h1 className="text-3xl font-bold mt-5 ml-5">Search Donors</h1>
      <div className="flex justify-center">
        <AppDropdown data={bloodGroups} />
        <AppButton Icon={HiSearch}>Search</AppButton>
      </div>
    </section>
  )
}
