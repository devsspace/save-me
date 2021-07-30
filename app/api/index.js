import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
  // if (localStorage?.getItem("profile")) {
  //   req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
  // }
  try {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
  } catch (error) {
    console.warn("No token found")
  }
  return req
})

export const logIn = (user) => API.post("/user/login", user)
export const signUp = (user) => API.post("/user/signup", user)
export const getUser = () => API.get("/user")
