import AppHeader from "@components/Headers/AppHeader"
import AppButtonV2 from "@components/others/AppButtonV2"
import { FaHandHoldingHeart, FaSearch } from "react-icons/fa"

export default function BloodManagementHeader() {
  return (
    <AppHeader
      title={
        <>
          Spare Only 15
          <span className="text-primary dark:text-primary"> Minutes </span>Save
          One Life!
        </>
      }
      others={
        <div className="flex justify-center md:justify-start   space-x-3">
          <AppButtonV2
            Icon={FaHandHoldingHeart}
            textPrimary="BloodDonor"
            textSecondary="Become"
          />
          <AppButtonV2
            Icon={FaSearch}
            textPrimary="BloodDonors"
            textSecondary="Search"
          />
        </div>
      }
      text="Always have a willing hand to help someone, you might be the only one that does. Become a Donor & Start Saving Lives. Or You Can Find a Blood Donor If You Have Emergency!"
      imgURL="/images/bloodManagement.svg"
    />
  )
}
