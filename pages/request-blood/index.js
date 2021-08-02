import AppButton from "@components/others/AppButton"
import AppDatePicker from "@components/others/AppDatePicker"
import AppDropdown from "@components/others/AppDropdown"
import bloodGroups from "@configs/fakeData/bloodGroups"
import districts from "@configs/fakeData/districts"
import { HiHeart, HiReply } from "react-icons/hi"

export default function RequestBlood() {
  return (
    <div className="flex flex-col justify-center space-y-4 w-1/2 m-auto text-center">
      <div>
        <h1 className="text-3xl font-bold">Request Blood</h1>
        <p className="text-xs sm:text-base">
          "Remember Blood is Unpayable
          <HiHeart className="text-red-500 inline" />
          ."
        </p>
      </div>
      <div className="flex space-x-3">
        <AppDropdown data={bloodGroups} />
        <AppDropdown data={districts} />
        <AppDatePicker />
      </div>
      <div className="flex justify-center">
        <AppButton Icon={HiReply}>Request</AppButton>
      </div>
    </div>
  )
}
