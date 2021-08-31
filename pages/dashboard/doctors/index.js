import DoctorCard from "@components/bloodManagement/DoctorCard"
import DashboardWrapper from "@components/Dashboard/DashboardWrapper"
import LoadingSpinner from "@components/others/LoadingSpinner"
import { Table, TableBody, TableHead } from "@components/others/Table"
import { getDoctors } from "app/api/index"
import { useEffect, useState } from "react"

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await getDoctors()
        setDoctors(data)
        setLoading(false)
        
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    get()
  }, [])
  console.log(doctors)
  const heads = ["Name", "Phone","BMDC Number", "Consultation Fee" , "Verification"]

  if (loading) return <LoadingSpinner />
  
  return (
    <DashboardWrapper adminOnly>
      <div>
        <h1 className="title">Doctors List</h1>
        <Table>
          <TableHead headItems={heads} />
          <TableBody>
            {doctors.length &&
              doctors.map((doctor) => (
                <DoctorCard doctor={doctor} key={doctor._id} />
              ))}
          </TableBody>
        </Table>
      </div>
    </DashboardWrapper>
  )
}

export default Doctors
