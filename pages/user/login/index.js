// import AppButton from "@components/others/AppButton"
// import AppSwitch from "@components/others/AppSwitch"
// import FormInput from "@components/others/FormInput"
// import LoadingSpinner from "@components/others/LoadingSpinner"
// import { ErrorMessage, WarningMessage } from "@components/others/Messages"
// import { logIn } from "app/api"
// import { useUserContext } from "app/contexts/UserContext"
// import Link from "next/link"
// import { useRouter } from "next/router"
// import React, { useState } from "react"
// import { useForm } from "react-hook-form"
// import {
//   AiOutlineEye,
//   AiOutlineEyeInvisible,
//   AiOutlineGoogle,
// } from "react-icons/ai"
// import { FiFacebook } from "react-icons/fi"
// import classes from "./login.module.css"

// const Login = () => {
//   const { currentUser, setCurrentUser } = useUserContext()

//   const router = useRouter()
//   const { from } = router.query
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [remember, setRemember] = useState(true)
//   if (currentUser) router.replace(from || "/dashboard/add-donor-info")

//   return (
//     <div className="bg-light dark:bg-dark text-center mt-8">
//       <h1 className="dark:text-light">Welcome Back</h1>
//       {(from || !router.pathname.includes("login")) && (
//         <WarningMessage message="You need to log in first" />
//       )}

//       <LoginForm />

//       <small className="text-blue-400">
//         <Link href="/user/signup">Don't have an account?</Link>
//       </small>

//       <h6 className="text-center dark:text-light">Or</h6>
//       <ProviderLogin />
//     </div>
//   )

//   function LoginForm() {
//     const {
//       register,
//       formState: { errors },
//       handleSubmit,
//     } = useForm()
//     const [showPass, setShowPass] = useState(false)

//     async function handleLogin(userInfo) {
//       setLoading(true)

//       try {
//         const { data } = await logIn(userInfo)

//         if (!data.user) {
//           setError(data.message)
//           setLoading(false)
//           return
//         }
//         console.log("Logged in user ==== ", data.user)
//         localStorage.setItem("profile", JSON.stringify(data))
//         setCurrentUser(data.user)
//         // if(from) router.push(from)
//       } catch (err) {
//         setLoading(false)
//         if (err.response.status === 429) {
//           console.log(err.response)
//           setError(err.response.data)
//         } else {
//           setError(err.message)
//         }
//       }
//     }

//     return (
//       <form onSubmit={handleSubmit(handleLogin)} className={classes.loginForm}>
//         {loading && (
//           <LoadingSpinner />
//           // <div className="loading">
//           //   <h1>Loading...</h1>
//           // </div>
//         )}
//         {error && <ErrorMessage message={error} />}

//         <FormInput
//           name="email"
//           type="email"
//           placeholder="Email"
//           register={register}
//           errors={errors}
//           className="my-2"
//         />
//         <div className="relative">
//           <FormInput
//             name="password"
//             type={showPass ? "text" : "password"}
//             placeholder="Password"
//             register={register}
//             errors={errors}
//             className="my-2"
//           />
//           <span onClick={() => setShowPass(!showPass)}>
//             {showPass ? (
//               <AiOutlineEyeInvisible className="absolute right-3 top-5" />
//             ) : (
//               <AiOutlineEye className="absolute right-3 top-5" />
//             )}
//           </span>
//         </div>
//         <AppSwitch
//           label="Remember me"
//           enabled={remember}
//           setEnabled={setRemember}
//         />
//         <AppButton className="m-auto">Log in</AppButton>
//       </form>
//     )
//   }

//   function ProviderLogin() {
//     // google sign
//     const handleGoogleSignIn = () => {
//       // const provider = new firebase.auth.GoogleAuthProvider()
//       // firebase
//       //   .auth()
//       //   .signInWithPopup(provider)
//       //   .then((result) => {
//       //     const { displayName, email } = result.user
//       //     const signInedUser = { name: displayName, email, success: true }
//       //     setUser(signInedUser)
//       //     setLoggedInUser(signInedUser)
//       //     history.replace(from)
//       //   })
//       //   .catch((error) => {
//       //     const errorMessage = error.message
//       //     const newUserInfo = { ...user }
//       //     newUserInfo.error = errorMessage
//       //     newUserInfo.success = false
//       //     setUser(newUserInfo)
//       //   })
//     }

//     // facebook singin
//     const handleFbSignIn = () => {
//       // const fbProvider = new firebase.auth.FacebookAuthProvider()
//       // firebase
//       //   .auth()
//       //   .signInWithPopup(fbProvider)
//       //   .then((result) => {
//       //     const { displayName, email } = result.user
//       //     const signInedUser = { name: displayName, email, success: true }
//       //     setLoggedInUser(signInedUser)
//       //     history.replace(from)
//       //   })
//       //   .catch((error) => {
//       //     const errorMessage = error.message
//       //     const newUserInfo = { ...user }
//       //     newUserInfo.error = errorMessage
//       //     newUserInfo.success = false
//       //     setUser(newUserInfo)
//       //   })
//     }
//     return (
//       <>
//         <button
//           onClick={handleGoogleSignIn}
//           className="mx-auto block border-2 border-primaryDark rounded-full px-3 py-2 my-3 flex items-center"
//         >
//           <AiOutlineGoogle className="text-3xl mr-3" />
//           Continue with Google
//         </button>
//         <button
//           onClick={handleFbSignIn}
//           className="mx-auto block border-2 border-primaryDark rounded-full px-3 py-2 mb-3 flex items-center"
//         >
//           <FiFacebook className="text-3xl mr-1" />
//           Continue with Facebook
//         </button>
//       </>
//     )
//   }
// }

// export default Login

import AuthForm from "@components/auth/AuthForm"
import AppButtonV2 from "@components/others/AppButtonV2"
import { useRef } from "react"
import { MdOpenInNew } from "react-icons/md"

export default function LoginPage() {
  const signInButtonRef = useRef()
  const signUpButtonRef = useRef()
  const containerRef = useRef()
  const handleRegister = () => {
    containerRef.current.classList.add("sign-up-mode")
  }
  const handleLogin = () => {
    containerRef.current.classList.remove("sign-up-mode")
  }
  return (
    <div className="authContainer" ref={containerRef}>
      <div className="forms-container">
        <AuthForm />
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
