import AppButton from "@components/others/AppButton"
import AppDatePicker from "@components/others/AppDatePicker"
import FormInput from "@components/others/FormInput"
import useErrorToast from "@hooks/useErrorToast"
import { signUp } from "app/api/index"
import { useUserContext } from "app/contexts/UserContext"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiFillMail } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"
import { TiTick } from "react-icons/ti"

export default function SignupForm({ setLoading }) {
  const { setCurrentUser } = useUserContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [donatedBefore, setDonatedBefore] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const [doctor, setDoctor] = useState(false)
  const [donationDate, setDonationDate] = useState({
    lastDonationDate: new Date(),
  })

  async function handleSignup(userInfo) {
    setLoading(true)
    try {
      if (donatedBefore)
        userInfo.lastDonationDate = donationDate.lastDonationDate
      if(doctor)
        userInfo.role = "doctor"

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
    <form
      onSubmit={handleSubmit(handleSignup)}
      autoComplete="off"
      className="sign-up-form authForm space-y-3"
    >
      <h2 className="text-dark dark:text-lighter text-3xl">Sign Up</h2>
      <div>
        <FormInput
          name="email"
          placeholder="Email"
          register={register}
          errors={errors}
          className="w-72 h-11"
          Icon={AiFillMail}
          type="email"
        />
      </div>
      <div>
        <FormInput
          className="w-72 h-11"
          Icon={BsLockFill}
          register={register}
          errors={errors}
          type="password"
          placeholder="Password"
          name="password"
        />
      </div>
      <div>
        <FormInput
          name="confirmPassword"
          className="w-72 h-11"
          Icon={BsLockFill}
          type="password"
          register={register}
          errors={errors}
          placeholder="Confirm Password"
        />
      </div>
      <div>
        {donatedBefore && (
          <div className="text-left">
            <small className="text-gray-400">
              Last donation date(Approximate)
            </small>
            <AppDatePicker
              name="lastDonationDate"
              className="!w-72"
              state={donationDate}
              setState={setDonationDate}
              canGoBack
              canNotGoForward
            />
          </div>
        )}
        <div>
          <div className="mt-3 flex items-center">
            <input
              id="donatedBefore"
              name="donatedBefore"
              type="checkbox"
              value={enabled}
              onChange={() => setDonatedBefore((prevState) => !prevState)}
              className="form-checkbox rounded border-gray-300 text-primary outline-none focus:!ring-0"
            />
            <label
              htmlFor="donatedBefore"
              className="ml-2 block text-sm text-dark dark:text-light"
            >
              I've Donated Before
            </label>
          </div>
        </div>
      </div>

      {/* doctor */}
      <div>
        <div>
          <div className="mt-3 flex items-center">
            <input
              id="donatedBefore"
              name="donatedBefore"
              type="checkbox"
              value={doctor}
              onChange={() => setDoctor(!doctor)}
              className="form-checkbox rounded border-gray-300 text-primary outline-none focus:!ring-0"
            />
            <label
              htmlFor="donatedBefore"
              className="ml-2 block text-sm text-dark dark:text-light"
            >
              I'm a doctor
            </label>
          </div>
        </div>
      </div>
      <AppButton Icon={TiTick}>Sign Up</AppButton>
    </form>
  )
}
