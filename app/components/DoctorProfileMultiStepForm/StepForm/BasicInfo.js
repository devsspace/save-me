import AppButton from "@components/others/AppButton"
import FormInput from "@components/others/FormInput"
import TagsInput from "@components/others/TagsInput"
import Image from "next/image"
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"

const BasicInfo = ({
  formData,
  setFormData,
  navigation,
  setSpeciality,
  setDegrees,
  degrees,
  speciality,
}) => {
  const [editable, setEditable] = useState(false)
  const { name, bmdcNumber } = formData
  // console.log(speciality, degrees)

  const {
    register,
    formState: { errors },
  } = useForm()

  const fullNameRef = useRef()
  const bmdcNumberRef = useRef()

  const handleEdit = (e) => {
    e.preventDefault()
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
          <div className="w-4/5">
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
                  defaultValue={name}
                  onBlur={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                  type="text"
                  required
                  placeholder="123456"
                  readOnly={!editable}
                  defaultValue={bmdcNumber}
                  register={register}
                  onBlur={(e) =>
                    setFormData({ ...formData, bmdcNumber: e.target.value })
                  }
                  errors={errors}
                  refnc={bmdcNumberRef}
                />
              </div>

              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Degrees
                </div>
                <TagsInput
                  className="w-full"
                  name="degrees"
                  state={degrees}
                  setState={setDegrees}
                  required
                  placeholder="Your degree"
                  readOnly={!editable}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Speciality
                </div>
                <TagsInput
                  className="w-full"
                  name="speciality"
                  placeholder="Your speciality"
                  state={speciality}
                  setState={setSpeciality}
                  required
                  readOnly={!editable}
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
                  type="clear"
                >
                  Next
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicInfo
