import axios from "axios"

const url = "https://save-me-dev.herokuapp.com"
const API = axios.create({ baseURL: "https://save-me-dev.herokuapp.com" })

API.interceptors.request.use((req) => {
  // if (localStorage?.getItem("profile")) {
  //   req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
  // }
  try {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`
  } catch (error) {
    console.warn("No token found")
  }
  return req
})

export const logIn = (user) => API.post("/user/login", user)
export const signUp = (user) => API.post("/user/signup", user)
export const getUser = () => API.get("/user")
export const saveProfile = (profileInfo) => API.put("/user", profileInfo)

export const searchDonor = (searchInfo) => {
  if (!searchInfo) return API.get("/donors")
  return API.get(
    `/donors?bloodGroup=${encodeURIComponent(
      searchInfo.bloodGroup
    )}&location=${encodeURIComponent(searchInfo.location)}&date=${
      searchInfo.date
    }&eligibility=${encodeURIComponent(searchInfo.eligibility)}`
  )
}

export const getDonor = (donorId) => API.get(`/donors/${donorId}`)

export const askDonation = (info) => API.post("/donation", info)

export const requestBlood = (bloodReqInfo) =>
  API.post("/request-blood", bloodReqInfo)
export const getRequests = () => API.get("/request-blood")
export const updateRequest = (requestInfo) =>
  API.put(`/request-blood/${requestInfo._id}`, requestInfo)

export const getDonations = (
  type = "",
  limit = 5,
  skip = 0,
  bloodGroup = "All",
  location = "All"
) =>
  API.get(
    `/donation?type=${type}&limit=${limit}&skip=${skip}&bloodGroup=${encodeURIComponent(
      bloodGroup
    )}&location=${encodeURIComponent(location)}`
  )

export const updateDonation = (donationId, donationInfo) =>
  API.put(`/donation/${donationId}`, donationInfo)

export const getWaitingList = (doctorId) => API.get(`/consult/${doctorId}`)
export const getDoctors = (queryString) =>
  API.get(`/doctors?valueToLimit=${queryString}`)
export const getDoctor = (doctorId) => API.get(`/doctors/${doctorId}`)

export const addPayment = (paymentInfo) => API.post("/consult", paymentInfo)
export const updateDoctor = (doctorId, doctorInfo) =>
  API.put(`/doctors/${doctorId}`, doctorInfo)
