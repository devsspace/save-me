import DonationCard from "@components/bloodManagement/DonationCard"
import DashboardWrapper from "@components/Dashboard/DashboardWrapper"
import Filters from "@components/others/Filters"
import LoadingSpinner from "@components/others/LoadingSpinner"
import Pagination from "@components/others/Pagination"
import { Table, TableBody, TableHead } from "@components/others/Table"
import { getDonations } from "app/api"
import { useUserContext } from "app/contexts/UserContext"
import { useEffect, useState } from "react"

const Donations = () => {
  const [donations, setDonations] = useState([])
  const [loading, setLoading] = useState(true)
  const { currentUser } = useUserContext()

  const [limit] = useState(5)
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState(0)
  const [filter, setFilter] = useState({bloodGroup: "All", location: "All"})

  const nextPage = () => {
    skip + limit < total && setSkip(skip + limit)
  }

  const previousPage = () => {
    skip > 0 && setSkip(skip - limit)
  }

  const getDonationsData = async (s = 0) => {
    // FIXME: When filtering from 2nd or other page of the pagination, data updates but pagination info doesn't update!
    try {
      const { data } = await getDonations(
        limit,
        s,
        filter.bloodGroup,
        filter.location
      )
      
      if (data.donors) setDonations(data.donors)
      setTotal(data.total)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getDonationsData(skip)
  }, [skip, limit, currentUser])

  const heads = [
    "Asked By",
    "Asked To",
    "Location",
    "Blood Group",
    "Date",
    "Details",
    "Status",
  ]

  if (loading) return <LoadingSpinner />

  return (
    <DashboardWrapper>
      <div>
        <h1 className="title">Donations</h1>
        <Filters filter={filter} setFilter={setFilter} onSubmit={getDonationsData} />

        <Table>
          <TableHead headItems={heads}></TableHead>
          <TableBody>
            {donations.length ? (
              donations.map((donation) => <DonationCard donation={donation} />)
            ) : (
              <p className="text-gray-400 m-5">No data found</p>
            )}
          </TableBody>
        </Table>

        {donations.length ? (
          <Pagination
            previous={previousPage}
            next={nextPage}
            skip={skip}
            setSkip={setSkip}
            limit={limit}
            total={total}
          />
        ) : (
          ""
        )}
      </div>
    </DashboardWrapper>
  )
}

export default Donations
