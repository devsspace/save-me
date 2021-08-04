import { getDonor } from "app/api"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const DonorDetail = () => {
  const router = useRouter()
  const { userId } = router.query
  const [donor, setDonor] = useState(null)
  const fetchDonorInfo = async () => {
    try {
      const donorInfo = await getDonor(userId)
      setDonor(donorInfo)
    } catch (error) {
      setDonor(null)
    }
  }
  useEffect(() => {
    fetchDonorInfo()
    console.log(donor)
  }, [])

  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default DonorDetail
