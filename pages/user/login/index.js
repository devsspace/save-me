import AuthForm from "@components/auth/AuthForm"
import AppButtonV2 from "@components/others/AppButtonV2"
import LoadingSpinner from "@components/others/LoadingSpinner"
import { useUserContext } from "app/contexts/UserContext"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { MdOpenInNew } from "react-icons/md"

export default function LoginPage() {
  const signInButtonRef = useRef()
  const signUpButtonRef = useRef()
  const containerRef = useRef()
  const [loading, setLoading] = useState(false)

  const handleRegister = () => {
    containerRef.current.classList.add("sign-up-mode")
  }

  const handleLogin = () => {
    containerRef.current.classList.remove("sign-up-mode")
  }

  const { currentUser } = useUserContext()
  const router = useRouter()
  const { from } = router.query

  useEffect(() => {
    if (currentUser) router.replace(from || "/dashboard/add-donor-info")
  }, [currentUser, from, router])

  if (loading) return <LoadingSpinner />

  return (
    <div className="authContainer" ref={containerRef}>
      <div className="forms-container">
        <AuthForm setLoading={setLoading} />
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="text-light">New Here ?</h3>
            <p className="text-light text-sm mb-3 mt-1">
              Our Goal is To Create & Maintain an Open Source Blood Management
              System which connects thousands of blood donors!
            </p>
            <div
              className="flex justify-center mt-2"
              onClick={handleRegister}
              ref={signUpButtonRef}
              id="sign-up-btn"
            >
              <AppButtonV2
                Icon={MdOpenInNew}
                textPrimary="SIGN UP NOW"
                textSecondary="You Can"
              />
            </div>
          </div>
          <img
            className="image"
            src="/images/signin.svg"
            alt="Login Now Illustration"
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className="text-light">One of Us ?</h3>
            <p className="text-light text-sm mb-3 mt-1">
              We Provide Medical Services Like Video Consultation, Online
              COVID_19 Care & Blood Management System. You Can Contact Us
              Through WhatsApp or Our Email Provided On About Section.
            </p>
            <div
              className="flex justify-center mt-2"
              onClick={handleLogin}
              ref={signInButtonRef}
              id="sign-up-btn"
            >
              <AppButtonV2
                Icon={MdOpenInNew}
                textPrimary="SIGN IN NOW"
                textSecondary="You Can"
              />
            </div>
          </div>
          <img
            className="image"
            src="/images/signup.svg"
            alt="Register Now Illustration"
          />
        </div>
      </div>
    </div>
  )
}
