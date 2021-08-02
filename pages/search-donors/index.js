import LoadBloodDonors from "@components/bloodManagement/LoadBloodDonors"
import SearchDonorsInputs from "@components/bloodManagement/SearchDonorsInputs"
import DarkMode from "@components/DarkMode"
import Image from "next/image"

export default function SearchDonorsPage() {
  return (
    <section>
      <div className="p-5">
        <DarkMode />
        <div className="flex justify-center">
          <SearchDonorsInputs />
          <div className="hidden md:block ml-5">
            <Image
              src="/images/searchBloodDonor.svg"
              height={200}
              width={400}
            />
          </div>
        </div>
      </div>

      <div className="p-5">
        <LoadBloodDonors />
      </div>
    </section>
  )
}
