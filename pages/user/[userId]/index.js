import withAuth from "@components/auth/withAuth"
import { errorAlert, successAlert } from "@components/others/Alerts"
import AppButton from "@components/others/AppButton"
import FormInput from "@components/others/FormInput"
import LoadingSpinner from "@components/others/LoadingSpinner"
import { askDonation, getDonor } from "app/api"
import { useUserContext } from "app/contexts/UserContext"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useRef, useState } from "react"
import { AiFillPhone, AiOutlineMail, AiOutlineUser } from "react-icons/ai"

const DonorDetail = () => {
  const router = useRouter()
  const { userId } = router.query
  const [loading, setLoading] = useState(true)
  const [donor, setDonor] = useState({})
  const { currentUser } = useUserContext()
  const detailsRef = useRef()

  useEffect(() => {
    const get = async () => {
      try {
        setLoading(true)
        const { data } = await getDonor(userId)
        console.log(data)
        setDonor(data?.donor)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    get()
  }, [userId])
  if (loading) return <LoadingSpinner />

  const handleSubmit = async () => {
    if(!(detailsRef.current.value.length && currentUser.email)) {
      errorAlert("Details required")
      return
    }
    const donationInfo = {askedBy: currentUser, askedTo: donor, details: detailsRef.current.value}
    
    try {
      const { data } = await askDonation(donationInfo)
      console.log(data)
      if(data.details) {
        successAlert(`Successfully Asked for donation to ${donor.name}`)
        detailsRef.current.value = ""
      }
      else errorAlert()
    } catch (error) {
      console.log(error)
      errorAlert(error.message)
    }
  }

  return (
    <div>
      {donor && (
        <div className="h-52 bg-gray-300 w-full p-10 flex justify-evenly items-center">
          <div className="flex items-center flex-wrap justify-center">
            <img
              className="w-32 h-32 rounded-full mr-5"
              src={
                donor.profilePic ||
                "https://newstthomasacademy.com/gems/photo-1/photo_id_11532590209.png"
              }
              alt=""
            />
            <div>
              <h1 className="text-xl">{donor.name}</h1>
              <h1 className="text-gray-500">{donor.location}</h1>
            </div>
          </div>
          <div className="text-xl">
            <h1 className="text-red-500 px-5">{donor.bloodGroup}</h1>
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                donor.eligibility == "eligible"
                  ? "bg-green-300 text-green-800"
                  : "bg-red-300 text-red-800"
              }`}
            >
              {donor.eligibility || "Not eligible"}
            </span>
          </div>
        </div>
      )}

      <div className="flex justify-center flex-wrap m-5">
        <Image src="/images/message.svg" height={200} width={400} />
        <div className="">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold block">
              Full Name
            </span>
            <FormInput name="name" value={currentUser.name} Icon={AiOutlineUser} />
          </div>
          <div className="mt-5">
            <span className="uppercase text-sm text-gray-600 font-bold block">
              Email
            </span>
            <FormInput value={currentUser.email} readOnly Icon={AiOutlineMail} />
          </div>
          <div className="mt-5">
            <span className="uppercase text-sm text-gray-600 font-bold block">
              Phone
            </span>
            <FormInput value={"+" + currentUser.phoneNumber} readOnly Icon={AiFillPhone} />
          </div>
          <div className="mt-5">
            <span className="uppercase text-sm text-gray-600 font-bold block">
              Details
            </span>
            <textarea
              ref={detailsRef}
              className="placeholder-gray-400 rounded-md focus:ring-2 focus:!ring-primary text-dark dark:text-light bg-white dark:bg-gray-600 shadow-md border-none p-4"
              placeholder="Why do you need it? Detail location, extra phone number if needed..."
            ></textarea>
          </div>
          <div className="mt-5">
            <AppButton className="justify-center" onClick={handleSubmit}>Ask for donation</AppButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuth(DonorDetail)
