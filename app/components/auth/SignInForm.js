import AppButton from "@components/others/AppButton"
import FormInput from "@components/Others/FormInput"
import { AiFillMail, AiOutlineLogin } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"

export default function SignInForm({
  handleSubmit,
  handleLogin,
  register,
  errors,
}) {
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      autoComplete="off"
      className="sign-in-form authForm space-y-3"
    >
      <h2 className="text-dark dark:text-lighter text-3xl">Sign In</h2>
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
          name="password"
          type="password"
          placeholder="Password"
          errors={errors}
          register={register}
        />
      </div>
      <AppButton type="submit" Icon={AiOutlineLogin}>
        Sign In
      </AppButton>
    </form>
  )
}
