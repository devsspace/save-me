import AvailableForConsultation from "@components/consultation/AvailableForConsultation"
import DarkMode from "@components/DarkMode"
import MainHeader from "@components/Headers/MainHeader"

export default function Home() {
  return (
    <section>
      <DarkMode />
      <MainHeader />
      <AvailableForConsultation />
      {/* <div className="flex flex-col space-y-2 items-center h-[90vh] justify-center">
        <SaveLives />
      </div> */}
    </section>
  )
}
