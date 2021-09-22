import DocorsFilterForm from "@components/consultation/DocorsFilterForm"
import AppContainer from "@components/others/AppContainer"
import AppInfoCard from "@components/others/AppInfoCard"
import AppLink from "@components/others/AppLink"
import { getDoctors } from "app/api/index"
import { useEffect, useState } from "react"

const Doctors = () => {
  const [doctorsList, setDoctorsList] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await getDoctors()
        setLoading(false)
        setDoctorsList(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    get()
  }, [])

  return (
    <section>
      <h1 className="title font-bold">Our Doctors</h1>
      <DocorsFilterForm />
      <AppContainer className="!mt-7 mb-0">
        <div className="flex justify-between">
          <h1 className="text-xs sm:text-xl font-bold">
            Available For Consultation Now
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-3">
          {doctorsList.length &&
            doctorsList.map((doctor) => (
              <AppLink href={`/doctors/${doctor._id}`}>
                <AppInfoCard data={doctor} />
              </AppLink>
            ))}
        </div>
      </AppContainer>
    </section>
  )
}

export default Doctors
