import AppInfoCard from "@components/others/AppInfoCard"
import AppLink from "@components/others/AppLink"
import { getDoctors } from "app/api/index"
import { useEffect, useState } from "react"

export default function ViewDoctorsSlide() {
  const [doctorsList, setDoctorsList] = useState([])

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await getDoctors()
        setDoctorsList(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    get()
  }, [])
  // const doctorsSlice = doctors.slice(0, 4)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-3">
      {doctorsList.map((doctor) => (
        <AppLink key={doctor.id} href={`/doctors/${doctor._id}`}>
          <AppInfoCard data={doctor} />
        </AppLink>
      ))}
    </div>
  )
}
