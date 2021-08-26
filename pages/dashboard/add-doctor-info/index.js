import DashboardWrapper from "@components/Dashboard/DashboardWrapper"
import DoctorProfileMultiStepForm from "@components/DoctorProfileMultiStepForm/DoctorProfileMultiStepForm"

const DoctorProfile = () => {
  return (
    <DashboardWrapper forDoctor>
      <div className="h-24 min-h-0 md:min-h-full flex items-center">
        <h1 className="title">Doctor Profile</h1>
      </div>
      <DoctorProfileMultiStepForm />
    </DashboardWrapper>
  )
}

export default DoctorProfile
