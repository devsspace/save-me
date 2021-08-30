import { errorAlert, successAlert } from "@components/others/Alerts"
import AppButton from "@components/others/AppButton"
import AppDropdown from "@components/others/AppDropdown"
import FormInput from "@components/others/FormInput"
import bloodGroups from "@configs/fakeData/bloodGroups"
import districts from "@configs/fakeData/districts"
import donorEligibility from "@configs/fakeData/donorEligibility"
import { getDonor, saveProfile } from "app/api"
import { useUserContext } from "app/contexts/UserContext"
import axios from "axios"
import { useRouter } from "node_modules/next/dist/client/router"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"

const DonorInfo = () => {
  const router = useRouter()
  const [imgURL, setImgURL] = useState(null)
  const { currentUser } = useUserContext()
  const [editable, setEditable] = useState(false)
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    bloodGroup: "",
    phoneNumber: "",
    location: "",
    eligibility: "",
    profilePic: imgURL,
  })
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm()
  const nameRef = useRef()
  const phoneNumberRef = useRef()

  useEffect(() => {
    const getInfo = async () => {
      try {
        const { data } = await getDonor(currentUser._id)
        if (data?.donor) setDonorInfo(data.donor)
      } catch (error) {
        console.log(error)
      }
    }
    getInfo()
  }, [])
  // console.log(donorInfo)

  const handleEdit = (e) => {
    e.preventDefault()
    // setValue("name", donorInfo.name)
    // setValue("phoneNumber", donorInfo.phoneNumber)
    setEditable(true)
    phoneNumberRef.current.focus()
    nameRef.current.focus()
  }

  const handleSave = async (data) => {
    setEditable(false)
    const donorProfile = {
      ...currentUser,
      ...donorInfo,
      ...data,
      profilePic: imgURL,
    }
    try {
      const { data } = await saveProfile(donorProfile)

      if (data?.user) successAlert("Successfully saved your profile")
      else errorAlert(data.message)
      console.log(data.user)
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
          <img
            className=""
            src="https://res.cloudinary.com/dxvzhnyuo/image/upload/v1627829528/blood-donor-removebg-preview_snnwvx.png"
            alt=""
          />
        </div>
        <div className="md:w-1/2 flex justify-center mt-5 md:justify-end w-full md:w-1/2 ">
          <form className="w-4/5">
            <div className="shadow-md flex-auto max-w-sm p-5 sm:p-10 pb-20">
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Full Name
                </div>
                <FormInput
                  className="w-full"
                  name="name"
                  required
                  placeholder="Your name"
                  readOnly={!editable}
                  defaultValue={donorInfo.name}
                  register={register}
                  errors={errors}
                  refnc={nameRef}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Blood Group
                </div>
                <AppDropdown
                  data={bloodGroups}
                  name="bloodGroup"
                  disabled={!editable}
                  state={donorInfo}
                  setState={setDonorInfo}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Eligibility
                </div>
                <AppDropdown
                  data={donorEligibility}
                  name="eligibility"
                  disabled={!editable}
                  state={donorInfo}
                  setState={setDonorInfo}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Phone Number
                </div>
                <FormInput
                  className="w-full"
                  name="phoneNumber"
                  type="number"
                  required
                  placeholder="+880"
                  readOnly={!editable}
                  defaultValue={donorInfo.phoneNumber}
                  register={register}
                  errors={errors}
                  refnc={phoneNumberRef}
                />
              </div>

              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  Upload Image
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
                      disabled={!editable}
                      register={register}
                      errors={errors}
                      required={false}
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </div>
              <div className="w-full mb-5">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Current Location
                </div>
                <AppDropdown
                  data={districts}
                  name="location"
                  disabled={!editable}
                  state={donorInfo}
                  setState={setDonorInfo}
                />
              </div>
              <div className="flex justify-center">
                {editable ? (
                  <AppButton
                    className="justify-center !bg-error mr-2"
                    type="reset"
                    onClick={(e) => {
                      e.preventDefault()
                      setEditable(false)
                    }}
                  >
                    Cancel
                  </AppButton>
                ) : (
                  <AppButton
                    className="justify-center bg-error mr-2"
                    onClick={handleEdit}
                  >
                    Edit
                  </AppButton>
                )}
                <AppButton
                  className={`justify-center ${
                    !editable ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  disabled={!editable}
                  onClick={
                    editable
                      ? handleSubmit(handleSave)
                      : (e) => e.preventDefault()
                  }
                >
                  Save
                </AppButton>
              </div>
            </div>
            <small
              onClick={() => router.push(`/user/${currentUser._id}`)}
              className="block text-center w-4/5 my-5  cursor-pointer text-primaryDark hover:text-green-700"
            >
              View your public profile
            </small>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DonorInfo
