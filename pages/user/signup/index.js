import AppButton from "@components/others/AppButton"
import AppDatePicker from "@components/others/AppDatePicker"
import AppSwitch from "@components/others/AppSwitch"
import FormInput from "@components/others/FormInput"
import LoadingSpinner from "@components/others/LoadingSpinner"
import { signUp } from "app/api"
import { useUserContext } from "app/contexts/UserContext"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai/"
import classes from "../login/login.module.css"

const Signup = () => {
  const { currentUser, setCurrentUser } = useUserContext()
  const router = useRouter()

  if (currentUser) router.replace("/dashboard/add-donor-info")

  return (
    <div className="bg-light dark:bg-dark text-center">
      <h1>Join Now</h1>
      <SignupForm />
      <small className="text-blue-400">
        <Link href="/user/login">Already have an account?</Link>
      </small>
    </div>
  )

  function SignupForm() {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const [donatedBefore, setDonatedBefore] = useState(false)
    const [donationDate, setDonationDate] = useState({
      lastDonationDate: new Date(),
    })

    async function handleSignup(userInfo) {
      setLoading(true)
      // const newUser = { ...userInfo, role: isDonor ? "donor" : "user" }

      try {
        if (donatedBefore)
          userInfo.lastDonationDate = donationDate.lastDonationDate

        const { data } = await signUp(userInfo)
        if (!data.user) {
          setError(data.message)
          setLoading(false)
          return
        }
        console.log("Signed up user ==== ", data.user)
        localStorage.setItem("profile", JSON.stringify(data))
        setCurrentUser(data.user)
        // router.push("/dashboard/add-donor-info")
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    return (
      <form onSubmit={handleSubmit(handleSignup)} className={classes.loginForm}>
        {loading && (
          <LoadingSpinner />
          // <div className="loading">
          //   <h1>Loading...</h1>
          // </div>
        )}
        {error && <p className="error-text">{error}</p>}

        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          register={register}
          errors={errors}
          className="my-2"
        />
        <div className="relative">
          <FormInput
            name="password"
            type={showPass ? "text" : "password"}
            placeholder="Password"
            register={register}
            errors={errors}
            className="my-2"
          />
          <span onClick={() => setShowPass(!showPass)}>
            {showPass ? (
              <AiOutlineEyeInvisible className="absolute right-3 top-5" />
            ) : (
              <AiOutlineEye className="absolute right-3 top-5" />
            )}
          </span>
        </div>

        <FormInput
          name="confirmPassword"
          type={showPass ? "text" : "password"}
          placeholder="Confirm Password"
          register={register}
          errors={errors}
          className="my-2"
        />

        <AppSwitch
          label="I already donated"
          enabled={donatedBefore}
          setEnabled={setDonatedBefore}
        />

        {donatedBefore ? (
          <div className="mt-2 mb-5 text-left">
            <small className="text-gray-400">
              Last donation date(Approximate)
            </small>
            <AppDatePicker
              name="lastDonationDate"
              state={donationDate}
              setState={setDonationDate}
              canGoBack
              canNotGoForward
            />
          </div>
        ) : (
          ""
        )}

        <AppButton className="m-auto">Sign Up</AppButton>
      </form>
    )
  }
}

export default Signup
