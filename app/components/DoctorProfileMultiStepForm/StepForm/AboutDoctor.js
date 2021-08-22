import AppButton from "@components/others/AppButton"
import FormInput from "@components/others/FormInput"
import Image from "next/image"
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"

const AboutDoctor = ({ formData, setFormData, navigation }) => {
  const { designation, department, employmentPeriod, aboutDoctor } = formData
  const [editable, setEditable] = useState(false)
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm()

  const designationRef = useRef()
  const departmentRef = useRef()
  const employmentPeriodRef = useRef()
  const aboutDoctorRef = useRef()
  const handleEdit = (e) => {
    e.preventDefault()
    setEditable(true)
    consultationFeeRef.current.focus()
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
                  <span className="text-red-400 mr-1">*</span> Designation
                </div>
                <FormInput
                  className="w-full"
                  name="designation"
                  required
                  placeholder="designation"
                  // readOnly={!editable}
                  defaultValue={designation}
                  register={register}
                  errors={errors}
                  refnc={designationRef}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Department
                </div>
                <FormInput
                  className="w-full"
                  name="department"
                  required
                  placeholder="department"
                  // readOnly={!editable}
                  defaultValue={department}
                  register={register}
                  errors={errors}
                  refnc={departmentRef}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Employment period
                </div>
                <FormInput
                  type="number"
                  className="w-full"
                  name="employmentPeriod"
                  required
                  placeholder="2 years"
                  // readOnly={!editable}
                  defaultValue={employmentPeriod}
                  register={register}
                  errors={errors}
                  refnc={employmentPeriodRef}
                />
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> About Doctor
                </div>

                <textarea
                  className="w-full shadow text-center"
                  name="aboutDoctor"
                  required
                  placeholder="write about yourself"
                  // readOnly={!editable}
                  defaultValue={aboutDoctor}
                  register={register}
                  errors={errors}
                  ref={aboutDoctorRef}
                />
              </div>

              <div className="flex justify-center mt-6">
                <AppButton
                  className="justify-center bg-error mr-2"
                  onClick={() => navigation.previous()}
                >
                  Back
                </AppButton>

                <AppButton
                  className={`justify-center ${
                    !editable ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
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

export default AboutDoctor
