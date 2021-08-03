import DonorCard from "@components/bloodManagement/DonorCard"
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
    <div>
      <Table>
        <TableHead headItems={heads}></TableHead>
        <TableBody>
          {donors.map((donor) => (
            <DonorCard donor={donor} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Donors
