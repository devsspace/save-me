import DoctorsInfo from "@components/consultation/DoctorsInfo"
import useRatingClient from "@hooks/useRatingClient"
import { getDoctor } from "app/api/index"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const DoctorProfile = () => {
  const router = useRouter()
  const [doctor, setDoctor] = useState({})
  const { doctorId } = router.query

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await getDoctor(doctorId)
        setDoctor(data)
      } catch (error) {
        console.log(error)
      }
    }
    get()
  }, [doctorId])

  const { ratingIcons } = useRatingClient(4.5)

  return (
    <div>
      {doctor && (
        <DoctorsInfo doctor={doctor} />
        // <div className="h-52 bg-gray-400 dark:bg-gray-700 w-full p-10 flex justify-evenly items-center">
        //   <div className="flex items-center flex-wrap justify-center">
        //     <img
        //       className="w-32 h-32 rounded-full mr-5"
        //       src={
        //         doctor.profilePic ||
        //         "https://newstthomasacademy.com/gems/photo-1/photo_id_11532590209.png"
        //       }
        //       alt=""
        //     />
        //     <div>
        //       <h1 className="text-xl">{doctor.name}</h1>
        //       <h1 className="text-gray-600">
        //         {doctor.degrees || "MS(medicine), FCPS, MBBS"}
        //       </h1>
        //     </div>
        //   </div>
        //   <div className="text-xl text-center">
        //     <h1 className="text-green-700 px-5">
        //       {doctor.specializations || "Surgery Neurology"}
        //     </h1>
        // <span
        //   className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        //     !doctor.active
        //       ? "bg-green-300 text-green-800"
        //       : "bg-red-300 text-red-800"
        //   }`}
        // >
        //   {!doctor.active ? "Active" : "Inactive"}
        // </span>
        //   </div>
        // <div className="mt-1 text-sm flex items-center gap-0.5 text-yellow-400">
        //   {ratingIcons.map((RatingIcon) => (
        //     <RatingIcon key={Math.random()} />
        //   ))}
        //   <p className="font-bold ml-1">{4.5}</p>
        // </div>
        // </div>
      )}

      {/* <div className="flex justify-center my-5">
        <AppButton onClick={() => router.push(`${router.asPath}/waitingList`)}>
          Consult now
        </AppButton>

        <AppButton className={`ml-5 justify-center`}>Book</AppButton>
      </div> */}
    </div>
  )
}

export default DoctorProfile
