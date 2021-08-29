import { errorAlert, successAlert } from "@components/others/Alerts"
import AppButton from "@components/others/AppButton"
import FormInput from "@components/others/FormInput"
import { saveProfile } from "app/api/index"
import { useUserContext } from "app/contexts/UserContext"
import axios from "axios"
import Image from "next/image"
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"

const FeeAndEducation = ({ formData, navigation, degrees, speciality }) => {
  const [imgURL, setImgURL] = useState(null)
  const { currentUser } = useUserContext()
  const { consultationFee, followUpFee, totalExperienceYears, profilePic } =
    formData
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const consultationFeeRef = useRef()
  const followUpFeeRef = useRef()
  const totalExperienceYearsRef = useRef()

  const handleSave = async (data) => {
    const doctorProfile = {
      ...currentUser,
      ...formData,
      ...data,
      degrees,
      speciality,
      profilePic: imgURL,
    }
    try {
      const { data } = await saveProfile(doctorProfile)

      if (data?.user) successAlert("Successfully saved your profile")
      else errorAlert(data.message)
    } catch (error) {
      errorAlert(error.message)
    }
  }
  // upload images
  const handleImageUpload = async (e) => {
    const imgData = new FormData()
    imgData.set("key", "681354ee434466a79bb386e524a1ce29")
    imgData.append("image", e.target.files[0])
    console.log(e.target.files)
    try {
      const res = await axios.post("https://api.imgbb.com/1/upload", imgData)
      setImgURL(res.data.data.display_url)
      successAlert("Successfully upload image")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-1/2 max-w-md flex flex-col justify-center">
          <Image height={300} width={300} src="/images/doctorInfo.svg" />
        </div>
        <div className="md:w-1/2 flex justify-center mt-5 md:justify-end w-full md:w-1/2 ">
          <form className="w-4/5">
            <div className="shadow-md flex-auto max-w-sm p-5 sm:p-10 pb-20">
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Consultaion Fee
                </div>
                <FormInput
                  type="number"
                  className="w-full"
                  name="consultationFee"
                  required
                  placeholder="Consultaion Fee"
                  defaultValue={consultationFee}
                  
                  register={register}
                  errors={errors}
                  refnc={consultationFeeRef}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Follow Up Fee
                </div>
                <FormInput
                  type="number"
                  className="w-full"
                  name="followUpFee"
                  required
                  placeholder="Follow up fee"
                  defaultValue={followUpFee}
                  
                  register={register}
                  errors={errors}
                  refnc={followUpFeeRef}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Total Experiences
                </div>
                <FormInput
                  className="w-full"
                  name="totalExperienceYears"
                  type="number"
                  required
                  placeholder="Total experiences"
                  defaultValue={totalExperienceYears}
                  
                  register={register}
                  errors={errors}
                  refnc={totalExperienceYearsRef}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Upload Image
                </div>
                <div className="w-full items-center justify-center bg-grey-lighter">
                  <label className="flex flex-col items-center px-2 py-1 bg-white dark:bg-gray-600 text-primary rounded-lg shadow-md tracking-wide uppercase border border-blue dark:border-none cursor-pointer">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <FormInput
                      className="w-full hidden"
                      name="profilePic"
                      type="file"
                      register={register}
                      errors={errors}
                      required={false}
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <AppButton
                  className="justify-center bg-error mr-2"
                  onClick={() => navigation.previous()}
                >
                  Back
                </AppButton>

                <AppButton
                  className="justify-center"
                  onClick={handleSubmit(handleSave)}
                >
                  Save
                </AppButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FeeAndEducation
