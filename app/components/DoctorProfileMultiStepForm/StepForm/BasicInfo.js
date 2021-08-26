import AppButton from "@components/others/AppButton"
import FormInput from "@components/others/FormInput"
import { useUserContext } from "app/contexts/UserContext"
import Image from "next/image"
import { useRouter } from "node_modules/next/dist/client/router"
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"
const BasicInfo = ({ formData, setFormData, navigation }) => {
  const router = useRouter()

  const { currentUser } = useUserContext()
  const [editable, setEditable] = useState(false)
  const { fullName, degrees, speciality, bmdcNumber } = formData

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm()

  const fullNameRef = useRef()
  const degreesRef = useRef()
  const specialityRef = useRef()
  const bmdcNumberRef = useRef()

  const handleEdit = (e) => {
    e.preventDefault()
    // setValue("name", donorInfo.name)
    // setValue("phoneNumber", donorInfo.phoneNumber)
    setEditable(true)
    fullNameRef.current.focus()
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
                  <span className="text-red-400 mr-1">*</span> Full Name
                </div>
                <FormInput
                  className="w-full"
                  name="fullName"
                  required
                  placeholder="Your name"
                  readOnly={!editable}
                  defaultValue={fullName}
                  onBlur={setFormData}
                  register={register}
                  errors={errors}
                  refnc={fullNameRef}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> BMDC Number
                </div>
                <FormInput
                  className="w-full"
                  name="bmdcNumber"
                  type="number"
                  required
                  placeholder="123456"
                  readOnly={!editable}
                  defaultValue={bmdcNumber}
                  onBlur={setFormData}
                  register={register}
                  errors={errors}
                  refnc={bmdcNumberRef}
                />
              </div>

              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Degrees
                </div>
                <FormInput
                  className="w-full"
                  name="degrees"
                  required
                  placeholder="Your degree"
                  readOnly={!editable}
                  defaultValue={degrees}
                  onBlur={setFormData}
                  register={register}
                  errors={errors}
                  refnc={degreesRef}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Speciality
                </div>
                <FormInput
                  className="w-full"
                  name="speciality"
                  required
                  placeholder="Your speciality"
                  readOnly={!editable}
                  defaultValue={speciality}
                  onBlur={setFormData}
                  register={register}
                  errors={errors}
                  refnc={specialityRef}
                />
              </div>

              <div className="flex justify-center mt-6">
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
                  onClick={() => navigation.next()}
                >
                  Next
                </AppButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BasicInfo
