import BloodRequestCard from "@components/bloodManagement/BloodRequestCard"
import DashboardWrapper from "@components/Dashboard/DashboardWrapper"
import LoadingSpinner from "@components/others/LoadingSpinner"
import { Table, TableBody, TableHead } from "@components/others/Table"
import { getRequests } from "app/api"
import { useEffect, useState } from "react"

const Requests = () => {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await getRequests()
        console.log(data)
        setRequests(data)
        setLoading(false)
        
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    get()
  }, [])
  console.log(requests)
  const heads = ["Name", "Blood Group", "Location", "Phone", "Date", "Status", "Edit"]

  if (loading) return <LoadingSpinner />
  return (
    <DashboardWrapper>
      <div>
        <h1 className="title">Blood Requests</h1>
        <Table>
          <TableHead headItems={heads} />
          <TableBody>
            {requests.length && requests.map((req) => (
              <BloodRequestCard request={req} />
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardWrapper>
  )
}

export default Requests
