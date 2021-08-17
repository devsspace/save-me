import AppInfoCard from "@components/others/AppInfoCard";
import { getDoctors } from "app/api/index";
import { useEffect, useState } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await getDoctors()
        setDoctors(data)
      } catch (error) {
        
      }
    }
    get()
  }, [])
  
  return (
    <div>
      <h1 className="title">Our Doctors</h1>
      <div className="flex justify-evenly flex-wrap w-full">
        {doctors.length &&
          doctors.map((doctor) => (
            <a
              href={`/doctors/${doctor._id}`}
              className="block w-full sm:w-2/5 lg:w-1/5 m-5"
            >
              <AppInfoCard data={doctor} className="w-full" />
            </a>
          ))}
      </div>
    </div>
  )
};

export default Doctors;