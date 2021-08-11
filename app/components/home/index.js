import BloodUrgentNeedCard from "@components/bloodManagement/BloodUrgentNeedCard"
import SaveLives from "@components/bloodManagement/SaveLives"
import AvailableForConsultation from "@components/consultation/AvailableForConsultation"
import ConsultationSpecialities from "@components/consultation/ConsultationSpecialities"
import FAQs from "@components/consultation/FAQs"
import MainHeader from "@components/Headers/MainHeader"

export default function HomePage() {
  return (
    <section>
      <MainHeader />
      <BloodUrgentNeedCard />
      <SaveLives />
      <AvailableForConsultation />
      <ConsultationSpecialities />
      <FAQs />
      {/* <div className="flex flex-col space-y-2 items-center h-[90vh] justify-center">
        <SaveLives />
      </div> */}
    </section>
  )
}
