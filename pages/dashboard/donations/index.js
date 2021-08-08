import DonationCard from "@components/bloodManagement/DonationCard";
import DashboardWrapper from "@components/Dashboard/DashboardWrapper";
import LoadingSpinner from "@components/others/LoadingSpinner";
import Pagination from "@components/others/Pagination";
import { Table, TableBody, TableHead } from "@components/others/Table";
import { getDonations } from "app/api";
import { useUserContext } from "app/contexts/UserContext";
import { useEffect, useState } from "react";

const Donations = () => {
    const [donations, setDonations] = useState([])
    const [loading, setLoading] = useState(true)
    const {currentUser} = useUserContext()
    
    const [limit, setLimit] = useState(5)
    const [skip, setSkip] = useState(0)
    const [total, setTotal] = useState(0)

    const nextPage = () => {
      skip+limit < total && setSkip(skip + limit)
    }

    const previousPage = () => {
      skip > 0 && setSkip(skip - limit)
    }

    const getDonationsData = async (limit, skip) => {
      try {
        const { data } = await getDonations(limit, skip)
        if(data.donors) setDonations(data.donors)
        console.log(data)
        setTotal(data.total)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }


    useEffect(() => {
      getDonationsData(limit, skip)
    }, [skip, limit, currentUser])



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
        <Pagination previous={previousPage} next={nextPage} skip={skip} setSkip={setSkip} limit={limit} total={total} />
      </div>
    </DashboardWrapper>
  )
};

export default Donations;