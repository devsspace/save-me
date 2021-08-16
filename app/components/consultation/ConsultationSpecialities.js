import AppContainer from "@components/others/AppContainer"
import AppLink from "@components/others/AppLink"
import AppSpecialityCard from "@components/others/AppSpecialityCard"
import consultingSpecialities from "@configs/fakeData/consultingSpecialities"

export default function ConsultationSpecialities() {
  return (
    <AppContainer>
      <p className="text-xl font-bold text-center">
        Our Consulting Specialities
      </p>
      <p className="text-center text-xs md:text-base p-0 md:px-5 lg:px-52">
        Ask a Doctor Online & Get Quick Medical Advice For Your Health Queries.
        Our Medical Panel Consists Of Over 3500+ Doctors From 80+ Specialities
      </p>
      <section className="flex justify-center gap-5 flex-wrap mt-5">
        {consultingSpecialities.map((speciality) => (
          <AppLink key={speciality.id} href="/coming-soon">
            <AppSpecialityCard speciality={speciality} />
          </AppLink>
        ))}
      </section>
    </AppContainer>
  )
}
