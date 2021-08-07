import BloodManagementHeader from "@components/Headers/BloodManagementHeader"
import ConsultationHeader from "@components/Headers/ConsultationHeader"

export default function MainHeader() {
  const arrayOfComponents = [ConsultationHeader, BloodManagementHeader]
  const RandomComponent = arrayOfComponents[Math.floor(Math.random() * 2)]
  return (
    <section>
      <RandomComponent />
    </section>
  )
}
