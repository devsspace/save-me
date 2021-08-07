import AppInfoCard from "@components/others/AppInfoCard"
import doctors from "@configs/fakeData/doctors"

export default function ViewDoctorsSlide() {
  const doctorsSlice = doctors.slice(0, 4)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
      {doctorsSlice.map((doctor) => (
        <AppInfoCard key={doctor.id} data={doctor} />
      ))}
    </div>
  )
}
