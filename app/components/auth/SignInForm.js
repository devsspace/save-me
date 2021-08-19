import AppButton from "@components/others/AppButton"
import FormInput from "@components/others/FormInput"
import useErrorToast from "@hooks/useErrorToast"
import { logIn } from "app/api/index"
import { useUserContext } from "app/contexts/UserContext"
import { useForm } from "react-hook-form"
import { AiFillMail, AiOutlineLogin } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"

export default function SignInForm({ setLoading }) {
  const { setCurrentUser } = useUserContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function handleLogin(userInfo) {
    setLoading(true)
    try {
      const { data } = await logIn(userInfo)
      if (!data.user) {
        useErrorToast(data.message)
        setLoading(false)
      }
      localStorage.setItem("profile", JSON.stringify(data))
      return setCurrentUser(data.user)
    } catch (err) {
      setLoading(false)
      if (err?.response?.status === 429) {
        return useErrorToast(err.response.data)
      }
      return useErrorToast(err.message)
    }
  }

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
