import AvailableForConsultation from "@components/consultation/AvailableForConsultation"
import ConsultationSpecialities from "@components/consultation/ConsultationSpecialities"
import FAQs from "@components/consultation/FAQs"
import DarkMode from "@components/DarkMode"
import MainHeader from "@components/Headers/MainHeader"

export default function HomePage() {
  return (
    <section>
      <DarkMode />
      <MainHeader />
      <AvailableForConsultation />
      <ConsultationSpecialities />
      <FAQs />
      {/* <div className="flex flex-col space-y-2 items-center h-[90vh] justify-center">
        <SaveLives />
      </div> */}
    </section>
  )
}
