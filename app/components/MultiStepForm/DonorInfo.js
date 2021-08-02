import AppButton from "@components/others/AppButton"
import AppDropdown from "@components/others/AppDropdown"
import FormInput from "@components/others/FormInput"
import bloodGroups from "@configs/fakeData/bloodGroups.js"
import { useState } from "react"
import { useForm } from "react-hook-form"

const DonorInfo = () => {
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    bloodGroup: "A+",
    phoneNumber: "",
    location: ""
  })
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  console.log(donorInfo)

  const handleSave = (data) => {
    console.log(data)
  }
  return (
    <div className="mx-auto max-w-6xl p-12">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-1/2 max-w-md flex flex-col justify-center">
          {/* <div className="md:text-4xl text-xl text-primary uppercase">
            We Save Lives
          </div>
          <div className="text-xl mt-4">Welcome, You're a Real Hero</div> */}
          <img
            className=""
            src="https://res.cloudinary.com/dxvzhnyuo/image/upload/v1627829528/blood-donor-removebg-preview_snnwvx.png"
            alt=""
          />
        </div>
        <div className="md:w-1/2 flex justify-start mt-5 md:justify-end w-full md:w-1/2 ">
          <form onSubmit={handleSubmit(handleSave)}>
            <div className="shadow-md flex-auto max-w-sm p-10 pb-20">
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Full Name
              </div>
              <FormInput name="name" required placeholder="Your name" register={register} errors={errors} />
            </div>
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Blood Group
              </div>
              <AppDropdown data={bloodGroups} name="bloodGroup" state={donorInfo} setState={setDonorInfo} />
            </div>
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Mobile Number
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                {" "}
                <input
                  placeholder="+880"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Current Location
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                {" "}
                <input
                  placeholder="Dhaka"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <AppButton className="justify-center" >Save</AppButton>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DonorInfo
