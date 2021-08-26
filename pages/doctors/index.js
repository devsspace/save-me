import DocorsFilterForm from "@components/consultation/DocorsFilterForm"
import AppContainer from "@components/others/AppContainer"
import AppInfoCard from "@components/others/AppInfoCard"
import AppLink from "@components/others/AppLink"
import LoadingSpinner from "@components/others/LoadingSpinner"
import { getDoctors } from "app/api/index"
import { useEffect, useState } from "react"
import { TiArrowRightThick } from "react-icons/ti"

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
    <AppContainer>
      <h1 className="title">Our Doctors</h1>
      <DocorsFilterForm />

      <div className="flex justify-between">
        <h1 className="text-xs sm:text-xl font-bold">
          Available For Consultation Now
        </h1>
        <div className="flex items-center">
          <button className="font-poppins text-xs  sm:text-xl font-bold mr-1">
            View All
          </button>
          <TiArrowRightThick />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-3">
        {loading ? (
          <LoadingSpinner />
        ) : (
          doctorsList.map((doctor) => (
            <AppLink href={`/doctors/${doctor._id}`}>
              <AppInfoCard data={doctor} />
            </AppLink>
          ))
        )}
      </div>
    </AppContainer>
  )
}

export default Doctors
