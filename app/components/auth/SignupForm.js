import AppButton from "@components/others/AppButton"
import AppDatePicker from "@components/others/AppDatePicker"
import FormInput from "@components/others/FormInput"
import { AiFillMail } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"
import { TiTick } from "react-icons/ti"

export default function SignupForm({
  handleSubmit,
  handleSignup,
  register,
  errors,
  donatedBefore,
  setDonatedBefore,
  donationDate,
  setDonationDate,
  enabled,
  setEnabled,
}) {
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
      <AppButton Icon={TiTick}>Sign Up</AppButton>
    </form>
  )
}
