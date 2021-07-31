import BloodManagementHeader from "@components/Headers/BloodManagementHeader"

export default function MainHeader() {
  // const arrayOfComponents = [null, NewsLetter, ReadArticles]
  // const RandomComponent = arrayOfComponents[Math.floor(Math.random() * 2) + 1]
  return (
    <section className="bg-gradient-to-b from-primaryLight to-transparent dark:from-transparent dark:to-transparent">
      <BloodManagementHeader />
    </section>
  )
}
