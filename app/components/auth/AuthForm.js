import SignInForm from "@components/auth/SignInForm"
import SignupForm from "@components/auth/SignupForm"
import useErrorToast from "@hooks/useErrorToast"
import { signUp } from "app/api/index"
import { useUserContext } from "app/contexts/UserContext"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function AuthForm() {
  const { setCurrentUser } = useUserContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [loading, setLoading] = useState(false)


  const [donatedBefore, setDonatedBefore] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const [donationDate, setDonationDate] = useState({
    lastDonationDate: new Date(),
  })

  async function handleSignup(userInfo) {
    setLoading(true)
    try {
      if (donatedBefore)
        userInfo.lastDonationDate = donationDate.lastDonationDate

      const { data } = await signUp(userInfo)
      if (!data.user) {
        useErrorToast(data.message)
        return setLoading(false)
      }
      localStorage.setItem("profile", JSON.stringify(data))
      return setCurrentUser(data.user)
    } catch (err) {
      useErrorToast(err.message)
      return setLoading(false)
    }
  }
  return (
    <div className="signin-signup">
      <SignInForm setLoading={setLoading} />
      <SignupForm
        handleSubmit={handleSubmit}
        handleSignup={handleSignup}
        register={register}
        errors={errors}
        donatedBefore={donatedBefore}
        setDonatedBefore={setDonatedBefore}
        donationDate={donationDate}
        setDonationDate={setDonationDate}
        enabled={enabled}
        setEnabled={setEnabled}
      />
    </div>
  )
}
