import DonorCard from "@components/bloodManagement/DonorCard"
import DashboardWrapper from "@components/Dashboard/DashboardWrapper"
import LoadingSpinner from "@components/others/LoadingSpinner"
import { Table, TableBody, TableHead } from "@components/others/Table"
import { searchDonor } from "app/api"
import { useDonorContext } from "app/contexts/DonorContext"
import { useEffect, useState } from "react"

const Donors = () => {
  const { donors, setDonors } = useDonorContext()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await searchDonor()
        setDonors(data)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    get()
  }, [])
  console.log(donors)
  const heads = ["Name", "Blood Group", "Location", "Phone", "Eligibility"]

  if (loading) return <LoadingSpinner />
  return (
    <DashboardWrapper adminOnly>
      <div>
        <h1 className="title">Donors List</h1>
        <Table>
          <TableHead headItems={heads} />
          <TableBody>
            {donors.map((donor) => (
              <DonorCard donor={donor} />
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardWrapper>
  )
}

export default Donors
