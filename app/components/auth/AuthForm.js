import SignInForm from "@components/auth/SignInForm"
import SignupForm from "@components/auth/SignupForm"

export default function AuthForm({setLoading}) {

  
  return (
    <div className="signin-signup">
      <SignInForm setLoading={setLoading} />
      <SignupForm
        setLoading={setLoading}
      />
    </div>
  )
}
