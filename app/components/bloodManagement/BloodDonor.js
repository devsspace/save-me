import AppText from "@components/bloodManagement/AppText"
import Image from "next/image"
import { useRouter } from "next/router"
import { AiFillHeart, AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { BsHeartHalf } from "react-icons/bs"
import { FaCheckCircle, FaHeartbeat, FaTimesCircle } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"

export default function BloodDonor({ donorInfo }) {
  const router = useRouter()
  const isActive = Math.floor(Math.random() * 2) + 1
  const {
    name,
    profilePic,
    eligibility,
    bloodGroup,
    location,
    donated = 10,
    _id,
  } = donorInfo
  console.log(donorInfo.profilePic)
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
     flex items-center space-x-3 p-2 cursor-pointer"
      onClick={() => router.push(`user/${_id}`)}
    >
      <Image
        src={profilePic || "/images/bloodDonorProfile.svg"}
        width={50}
        height={50}
        objectFit="cover"
        alt="Blood Donor"
        className="rounded-full"
      />
      <div>
        <AppText
          text={bloodGroup}
          className="relative right-[35px] top-[10px] justify-center bg-gradient-to-l
          from-transparent to-yellow-200 dark:from-white dark:to-blue-300
          p-1 w-7 h-7 rounded-full"
          textClassName="text-sm text-red-500 dark:text-gray-600 font-bold"
        />
        {isActive === 1 ? (
          <div
            className="relative h-3 w-3 bg-green-400
         rounded-full right-[60px] bottom-[10px]"
          />
        ) : (
          <div
            className="relative h-3 w-3 bg-white border-2 border-gray-400
       rounded-full right-[60px] bottom-[10px]"
          />
        )}
        <AppText
          text={`${name}`}
          Icon={AiOutlineUser}
          className="-mt-9"
          textClassName="line-clamp-1"
          iconClassName="text-red-500 dark:text-red-400"
        />
        {eligibility ? (
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
          text={location}
          Icon={HiLocationMarker}
          iconClassName="text-gray-600"
        />
      </div>
    </div>
  )
}
