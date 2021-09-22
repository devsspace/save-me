import BloodManagementHeader from "@components/Headers/BloodManagementHeader"
import ConsultationHeader from "@components/Headers/ConsultationHeader"

export default function MainHeader() {
  const arrayOfComponents = [ConsultationHeader, BloodManagementHeader]
  const RandomComponent = arrayOfComponents[Math.floor(Math.random() * 2)]
  return (
    <section className="md:h-[90vh] 2xl:h-[80vh] flex justify-center items-center">
      <RandomComponent />
    </section>
  )
}
