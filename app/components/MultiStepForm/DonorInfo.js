import { errorAlert, successAlert } from "@components/others/Alerts"
import AppButton from "@components/others/AppButton"
import AppDropdown from "@components/others/AppDropdown"
import FormInput from "@components/others/FormInput"
import bloodGroups from "@configs/fakeData/bloodGroups"
import districts from "@configs/fakeData/districts"
import { getDonor, saveProfile } from "app/api"
import { useUserContext } from "app/contexts/UserContext"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"

const DonorInfo = () => {
  const { currentUser } = useUserContext()
  const [editable, setEditable] = useState(false)
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    bloodGroup: "",
    phoneNumber: "",
    location: "",
    profilePic: "",
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
      } catch (error) {}
    }
    getInfo()
  }, [])
  console.log(donorInfo)

  const handleEdit = (e) => {
    e.preventDefault()
    // setValue("name", donorInfo.name)
    // setValue("phoneNumber", donorInfo.phoneNumber)
    setEditable(true)
    phoneNumberRef.current.focus()
    nameRef.current.focus()
  }

  const handleSave = async (data) => {
    console.log(data)
    setEditable(false)
    const donorProfile = { ...currentUser, ...donorInfo, ...data }
    try {
      const { data } = await saveProfile(donorProfile)
      console.log(data)
      if (data?.user) successAlert("Successfully saved your profile")
      else errorAlert(data.message)
    } catch (error) {
      errorAlert(error.message)
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
                  <span className="text-red-400 mr-1">*</span> Upload Image
                </div>
                <div className="w-full items-center justify-center bg-grey-lighter">
                  <label className="flex flex-col items-center px-2 py-1 bg-white text-primary rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-green-500 hover:text-white">
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
                    onClick={(e) => {e.preventDefault(); setEditable(false)}}
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
                  className="justify-center"
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default DonorInfo
