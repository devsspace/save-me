import AppText from "@components/bloodManagement/AppText"
import Image from "next/image"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsHeartHalf } from "react-icons/bs"
import { FaCheckCircle, FaHeartbeat, FaTimesCircle } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"

export default function BloodDonor({ donorInfo }) {
  const active = true
  const { name, age, phone, eligible, group, gender, district, donated } =
    donorInfo

  let AppHeartIcon
  if (donated >= 10) {
    AppHeartIcon = FaHeartbeat
  } else if (donated >= 5) {
    AppHeartIcon = AiFillHeart
  } else if (donated >= 1) {
    AppHeartIcon = BsHeartHalf
  } else {
    AppHeartIcon = AiOutlineHeart
  }

  return (
    <div
      className="m-2 bg-white dark:bg-gray-600 rounded-md shadow-md
     flex items-center space-x-3 p-2"
    >
      <Image
        src="/images/bloodDonorProfile.svg"
        width={50}
        height={50}
        objectFit="contain"
        className="cursor-pointer"
        alt={`${name} - A Blood Donor`}
      />
      <div>
        <AppText
          text={group}
          className="relative right-[35px] top-[10px] justify-center bg-gradient-to-l
          from-transparent to-yellow-200 dark:from-white dark:to-blue-300
          p-1 w-7 h-7 rounded-full"
          textClassName="text-xs text-red-500 dark:text-gray-600 font-bold"
        />
        <AppText
          text={`Donation: ${donated}`}
          Icon={AppHeartIcon}
          className="-mt-7"
          iconClassName="text-red-500 dark:text-red-400"
        />
        {eligible ? (
          <AppText
            text="Eligible <3"
            Icon={FaCheckCircle}
            iconClassName="text-green-500 dark:text-green-400"
          />
        ) : (
          <AppText
            text="Not Eligible"
            Icon={FaTimesCircle}
            iconClassName="text-red-500 dark:text-red-400"
          />
        )}
        <AppText
          text={district}
          Icon={HiLocationMarker}
          iconClassName="text-gray-600"
        />
      </div>
    </div>
  )
}
