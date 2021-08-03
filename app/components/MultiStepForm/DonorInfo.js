import { errorAlert, successAlert } from "@components/others/Alerts"
import AppButton from "@components/others/AppButton"
import AppDropdown from "@components/others/AppDropdown"
import FormInput from "@components/others/FormInput"
import bloodGroups from "@configs/fakeData/bloodGroups"
import districts from "@configs/fakeData/districts"
import { saveProfile } from "app/api"
import { useUserContext } from "app/contexts/UserContext"
import { useState } from "react"
import { useForm } from "react-hook-form"

const DonorInfo = () => {
  const {currentUser} = useUserContext()
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    bloodGroup: "A+",
    phoneNumber: "",
    location: "Dhaka",
  })
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const handleSave = async (data) => {
    const donorProfile = {...currentUser, ...donorInfo, ...data}
    try {
      const { data } = await saveProfile(donorProfile)
      console.log(data)
      if(data?.user) successAlert("Successfully saved your profile")
      else errorAlert(data.message)
      
    } catch (error) {
      errorAlert(error.message)
    }
  }
  return (
    <div className="mx-auto max-w-6xl p-12">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-1/2 max-w-md flex flex-col justify-center">
          <img
            className=""
            src="https://res.cloudinary.com/dxvzhnyuo/image/upload/v1627829528/blood-donor-removebg-preview_snnwvx.png"
            alt=""
          />
        </div>
        <div className="md:w-1/2 flex justify-start mt-5 md:justify-end w-full md:w-1/2 ">
          <form>
            <div className="shadow-md flex-auto max-w-sm p-10 pb-20">
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Full Name
                </div>
                <FormInput
                  name="name"
                  required
                  placeholder="Your name"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Blood Group
                </div>
                <AppDropdown
                  data={bloodGroups}
                  name="bloodGroup"
                  state={donorInfo}
                  setState={setDonorInfo}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Mobile Number
                </div>
                <FormInput
                  name="phoneNumber"
                  type="number"
                  required
                  placeholder="+880"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="w-full mb-5">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Current Location
                </div>
                <AppDropdown
                  data={districts}
                  name="location"
                  state={donorInfo}
                  setState={setDonorInfo}
                />
              </div>
              <AppButton
                className="justify-center"
                onClick={handleSubmit(handleSave)}
              >
                Save
              </AppButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DonorInfo
