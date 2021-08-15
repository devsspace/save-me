import AppLink from "@components/others/AppLink";
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
      <h1 className="mb-10">Doctors List here</h1>
      {doctors.length &&
        doctors.map((doctor) => (
          <AppLink href={`/doctors/${doctor._id}`}>Name: {doctor.name} </AppLink>
        ))}
    </div>
  )
};

export default Doctors;