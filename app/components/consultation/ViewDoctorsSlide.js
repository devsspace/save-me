import AppInfoCard from "@components/others/AppInfoCard"
import AppLink from "@components/others/AppLink"
import doctors from "@configs/fakeData/doctors"

export default function ViewDoctorsSlide() {
  const doctorsSlice = doctors.slice(0, 4)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-3">
      {doctorsSlice.map((doctor) => (
        <AppLink key={doctor.id} href="/coming-soon">
          <AppInfoCard data={doctor} />
        </AppLink>
      ))}
    </div>
  )
}
