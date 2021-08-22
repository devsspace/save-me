import DoctorProfileMultiStepForm from "@components/DoctorProfileMultiStepForm/DoctorProfileMultiStepForm"

const DoctorProfile = () => {
  return (
    <>
      <div className="h-24 min-h-0 md:min-h-full flex items-center">
        <h1 className="title">Doctor Profile</h1>
      </div>
      <DoctorProfileMultiStepForm />
    </>
  )
}

export default DoctorProfile
