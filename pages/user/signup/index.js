import DarkMode from "@components/DarkMode"
import AppButton from "@components/others/AppButton"
import AppSwitch from "@components/others/AppSwitch"
import FormInput from "@components/others/FormInput"
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


  if(currentUser) router.replace("/dashboard/add-donor-info")

  return (
    <div className="bg-light dark:bg-dark text-center">
      <DarkMode />
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
    const [isDonor, setIsDonor] = useState(false)

    async function handleSignup(userInfo) {
      
      setLoading(true)
      const newUser = { ...userInfo, role: isDonor ? "donor" : "user" }

      try {
        const { data } = await signUp(newUser)
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
          <div className="loading">
            <h1>Loading...</h1>
          </div>
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

        <AppSwitch label="I am a donor" enabled={isDonor} setEnabled={setIsDonor} />
        {/* <span className="my-3 flex items-center">
          <input
            name="isDonor"
            type="checkbox"
            {...register("isDonor")}
            className="mr-2 rounded"
          />
          <span>I am a Donor</span>
        </span> */}

        <AppButton className="m-auto">Sign Up</AppButton>
      </form>
    )
  }
}

export default Signup
