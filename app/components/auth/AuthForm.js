import AppButton from "@components/Others/AppButton"
import FormInput from "@components/Others/FormInput"
import { AiFillMail, AiOutlineLogin } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import { TiTick } from "react-icons/ti"

export default function AuthForm() {
  return (
    <div className="signin-signup">
      <form autoComplete="off" className="sign-in-form authForm space-y-3">
        <h2 className="text-dark dark:text-lighter text-3xl">Sign In</h2>
        <div>
          <FormInput
            className="w-72 h-11"
            Icon={AiFillMail}
            type="text"
            placeholder="Email"
          />
        </div>
        <div>
          <FormInput
            className="w-72 h-11"
            Icon={BsLockFill}
            type="password"
            placeholder="Password"
          />
        </div>
        <AppButton Icon={AiOutlineLogin}>Sign In</AppButton>
      </form>
      <form autoComplete="off" className="sign-up-form authForm space-y-3">
        <h2 className="text-dark dark:text-lighter text-3xl">Sign Up</h2>
        <div>
          <FormInput
            className="w-72 h-11"
            Icon={FaUserAlt}
            type="text"
            placeholder="Name"
          />
        </div>
        <div>
          <FormInput
            className="w-72 h-11"
            Icon={AiFillMail}
            type="text"
            placeholder="Email"
          />
        </div>
        <div>
          <FormInput
            className="w-72 h-11"
            Icon={BsLockFill}
            type="password"
            placeholder="Password"
          />
        </div>
        <AppButton Icon={TiTick}>Sign Up</AppButton>
      </form>
    </div>
  )
}
