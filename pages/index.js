import SaveLives from "@components/bloodManagement/SaveLives"

export default function Home() {
  return (
    <section>
      <div className="text-right mr-10">{/* <DarkMode /> */}</div>
      <div className="flex flex-col space-y-2 items-center h-[90vh] justify-center">
        <SaveLives />
      </div>
    </section>
  )
}
