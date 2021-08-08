import DonationCard from "@components/bloodManagement/DonationCard";
import DashboardWrapper from "@components/Dashboard/DashboardWrapper";
import LoadingSpinner from "@components/others/LoadingSpinner";
import { Table, TableBody, TableHead } from "@components/others/Table";
import { getDonations } from "app/api";
import { useEffect, useState } from "react";

const Donations = () => {
    const [donations, setDonations] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const get = async () => {
        try {
          const { data } = await getDonations()
          setDonations(data)
          setLoading(false)
        } catch (error) {
          setLoading(false)
          console.log(error)
        }
      }
      get()
    }, [])
    console.log(donations)
    const heads = ["Asked By", "Asked To", "Location", "Blood Group", "Date", "Details", "Status"]

    if (loading) return <LoadingSpinner />
  return (
    <DashboardWrapper>
      <div>
        <h1 className="title">Donations</h1>
        <Table>
          <TableHead headItems={heads}></TableHead>
          <TableBody>
            {donations.length && donations.map((donation) => (
              <DonationCard donation={donation} />
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardWrapper>
  )
};

export default Donations;