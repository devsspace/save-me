import DonationCard from "@components/bloodManagement/DonationCard"
import DashboardWrapper from "@components/Dashboard/DashboardWrapper"
import AppButton from "@components/others/AppButton"
import AppDropdown from "@components/others/AppDropdown"
import LoadingSpinner from "@components/others/LoadingSpinner"
import Pagination from "@components/others/Pagination"
import { Table, TableBody, TableHead } from "@components/others/Table"
import bloodGroups from "@configs/fakeData/bloodGroups"
import districts from "@configs/fakeData/districts"
import { getDonations } from "app/api"
import { useUserContext } from "app/contexts/UserContext"
import { useEffect, useState } from "react"

const Donations = () => {
  const [donations, setDonations] = useState([])
  const [loading, setLoading] = useState(true)
  const { currentUser } = useUserContext()

  const [limit, setLimit] = useState(5)
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState(0)
  const [filter, setFilter] = useState({bloodGroup: "", location: ""})

  const nextPage = () => {
    skip + limit < total && setSkip(skip + limit)
  }

  const previousPage = () => {
    skip > 0 && setSkip(skip - limit)
  }

  const getDonationsData = async (limit, skip) => {
    try {
      const { data } = await getDonations(limit, skip)
      
      if (data.donors) setDonations(data.donors)
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

  const heads = [
    "Asked By",
    "Asked To",
    "Location",
    "Blood Group",
    "Date",
    "Details",
    "Status",
  ]

  const handleFilter = async () => {
    try {
      const { data } = await getDonations(limit, 0, filter.bloodGroup, filter.location)
      
      if (data.donors) setDonations(data.donors)
      setTotal(data.total)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  if (loading) return <LoadingSpinner />
  return (
    <DashboardWrapper>
      <div>
        <h1 className="title">Donations</h1>
        <div className="w-1/3 mr-auto px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <AppDropdown
            data={bloodGroups}
            name="bloodGroup"
            state={filter}
            setState={setFilter}
            className="mr-3 border-2 border-gray-200 rounded"
            optionsClassName="!w-36"
          />
          <AppDropdown
            data={districts}
            name="location"
            state={filter}
            setState={setFilter}
            className="mr-3 border-2 border-gray-200 rounded"
            optionsClassName="!w-40"
          />
          <AppButton onClick={handleFilter}>Filter</AppButton>
        </div>
        <Table>
          <TableHead headItems={heads}></TableHead>
          <TableBody>
            {donations.length
              ? donations.map((donation) => (
                  <DonationCard donation={donation} />
                ))
              : ""}
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
        ) : ""}
      </div>
    </DashboardWrapper>
  )
}

export default Donations
