import DarkMode from "@components/DarkMode"
import MainHeader from "@components/Headers/MainHeader"

export default function Home() {
  return (
    <section>
      <div className="text-right mr-10">
        <DarkMode />
      </div>
      <MainHeader />
      {/* <div className="flex flex-col space-y-2 items-center h-[90vh] justify-center">
        <SaveLives />
      </div> */}
    </section>
  )
}
