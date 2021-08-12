import { errorAlert, successAlert } from "@components/others/Alerts"
import AppButton from "@components/others/AppButton"
import AppDatePicker from "@components/others/AppDatePicker"
import AppDropdown from "@components/others/AppDropdown"
import LoadingSpinner from "@components/others/LoadingSpinner"
import bloodGroups from "@configs/fakeData/bloodGroups"
import districts from "@configs/fakeData/districts"
import { getUser, requestBlood } from "app/api"
import { useUserContext } from "app/contexts/UserContext"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { HiHeart, HiReply } from "react-icons/hi"

const RequestBlood = () => {
  let { currentUser } = useUserContext()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const initialRequestInfo = {
    bloodGroup: "A+",
    location: "Dhaka",
    date: new Date(),
    numberOfBags: 1,
  }
  const [bloodReqInfo, setBloodReqInfo] = useState(initialRequestInfo)

  useEffect(() => {
    try {
      const previousInfo = JSON.parse(localStorage.getItem("reqInfo"))
      if (previousInfo.bloodGroup) setBloodReqInfo(previousInfo)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleRequest = async () => {
    setLoading(true)
    localStorage.setItem("reqInfo", JSON.stringify(bloodReqInfo))
    if (!currentUser?._id) {
      try {
        const { data } = await getUser()
        currentUser = data?.user || null
      } catch (error) {
        console.log(error)
      }
    }
    if (!currentUser?._id) {
      router.push(`/user/login?from=${router.pathname}`)
    } else {
      try {
        const { data } = await requestBlood({
          ...bloodReqInfo,
          requestedBy: currentUser,
        })
        console.log(data)
        if (data?.bloodGroup) {
          const message = `${data.numberOfBags} bag(s) ${data.bloodGroup} blood on ${data.date} request added`
          successAlert(message)
        } else errorAlert(data?.message)
      } catch (error) {
        errorAlert(error.message)
      }
      setLoading(false)
    }
  }

  if (loading) return <LoadingSpinner />

  return (
    <div className="flex flex-col justify-center space-y-4 w-1/2 m-auto text-center mt-12">
      <div>
        <h1 className="text-3xl font-bold">Request Blood</h1>
        <p className="text-xs sm:text-base">
          "Remember Blood is Unpayable
          <HiHeart className="text-red-500 inline" />
          ."
        </p>
      </div>
      <div className="flex space-x-3">
        <AppDropdown
          name="bloodGroup"
          data={bloodGroups}
          state={bloodReqInfo}
          setState={setBloodReqInfo}
        />
        <AppDropdown
          name="location"
          data={districts}
          state={bloodReqInfo}
          setState={setBloodReqInfo}
        />
        <AppDatePicker
          name="date"
          state={bloodReqInfo}
          setState={setBloodReqInfo}
        />
      </div>
      <div className="flex justify-center">
        <AppButton Icon={HiReply} onClick={handleRequest}>
          Request
        </AppButton>
      </div>
    </div>
  )
}

export default RequestBlood
