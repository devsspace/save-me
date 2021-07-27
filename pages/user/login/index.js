// import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import firebase from "firebase/app"
// import "firebase/auth"
// import { useHistory, useLocation } from "react-router-dom"
// import { userContext } from "../../App"
// import "./Login.css"
import DarkMode from "@components/DarkMode"
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"

const Login = () => {
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    success: false,
    error: "",
  })
  // const [loggedInUser, setLoggedInUser] = useContext(userContext)
  const {
    register, errors, watch, handleSubmit,
  } = useForm({})
  const password = useRef({})
  password.current = watch("password", "")
  const onSubmit = () => {
    // sign up
    // if (newUser && user.email && user.password) {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(user.email, user.password)
    //     .then(() => {
    //       const newUserInfo = { ...user }
    //       newUserInfo.success = true
    //       newUserInfo.error = ""
    //       setUser(newUserInfo)
    //       updateUserName(user.name)
    //       setLoggedInUser(newUserInfo)
    //       history.replace(from)
    //     })
    //     .catch((error) => {
    //       const errorMessage = error.message
    //       const newUserInfo = { ...user }
    //       newUserInfo.error = errorMessage
    //       newUserInfo.success = false
    //       setUser(newUserInfo)
    //     })
    // }
    // // sign in
    // if (!newUser) {
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(user.email, user.password)
    //     .then((res) => {
    //       const newUserInfo = { ...user }
    //       newUserInfo.success = true
    //       newUserInfo.error = ""
    //       setUser(newUserInfo)
    //       updateUserName(user.name)
    //       setLoggedInUser(newUserInfo)
    //       history.replace(from)
    //     })
    //     .catch((error) => {
    //       const errorMessage = error.message
    //       const newUserInfo = { ...user }
    //       newUserInfo.error = errorMessage
    //       newUserInfo.success = false
    //       setUser(newUserInfo)
    //     })
    // }
  }

  // blur handle
  const handleBlur = (e) => {
    let isFormValid = true
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 8
      const passwordHasNumber = /\d{1}/.test(e.target.value)
      isFormValid = isPasswordValid && passwordHasNumber
    }
    if (e.target.name === "password_repeat") {
      const isPasswordValid = e.target.value.length > 6
      const passwordHasNumber = /\d{1}/.test(e.target.value)
      isFormValid = isPasswordValid && passwordHasNumber
    }
    if (isFormValid) {
      const newUserInfo = { ...user }
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)
    }
  }
  // google sign
  const handleGoogleSignIn = () => {
    // const provider = new firebase.auth.GoogleAuthProvider()
    // firebase
    //   .auth()
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     const { displayName, email } = result.user
    //     const signInedUser = { name: displayName, email, success: true }
    //     setUser(signInedUser)
    //     setLoggedInUser(signInedUser)
    //     history.replace(from)
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message
    //     const newUserInfo = { ...user }
    //     newUserInfo.error = errorMessage
    //     newUserInfo.success = false
    //     setUser(newUserInfo)
    //   })
  }

  // facebook singin
  const handleFbSignIn = () => {
    // const fbProvider = new firebase.auth.FacebookAuthProvider()
    // firebase
    //   .auth()
    //   .signInWithPopup(fbProvider)
    //   .then((result) => {
    //     const { displayName, email } = result.user
    //     const signInedUser = { name: displayName, email, success: true }
    //     setLoggedInUser(signInedUser)
    //     history.replace(from)
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message
    //     const newUserInfo = { ...user }
    //     newUserInfo.error = errorMessage
    //     newUserInfo.success = false
    //     setUser(newUserInfo)
    //   })
  }
  const updateUserName = (name, email) => {
    // const user = firebase.auth().currentUser

    // user
    //   .updateProfile({
    //     displayName: name,
    //     email,
    //   })
    //   .then(() => {
    //     const newUserInfo = { ...user }
    //     setUser(newUserInfo)
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message
    //     const newUserInfo = { ...user }
    //     newUserInfo.error = errorMessage
    //     setUser(newUserInfo)
    //   })
  }
  return (
    <div className="bg-light dark:bg-dark">
      <DarkMode />
      <form className="formStyle">
        <h3 className="dark:text-light">{newUser ? "Create an account" : "Sign in"}</h3>

        {newUser && <label className="label dark:text-light">Name</label>}
        {newUser && (
          <input
            onBlur={handleBlur}
            type="text"
            id="name"
            name="name"
            {...register("name", {
              required: "You must specify your name",
            })}
          />
        )}

        {errors?.name && <p className="error">{errors.name.message}</p>}
        <label className="label dark:text-light">Username or Email</label>
        <input
          onBlur={handleBlur}
          name="email"
          type="email"
          {...register("email", {
            required: "You must specify your email",
          })}
        />
        {errors?.email && <p className="error">{errors.email.message}</p>}

        <label className="label dark:text-light">Password</label>
        <input
          onBlur={handleBlur}
          name="password"
          type="password"
          {...register("password", {
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
        />
        {errors?.password && <p className="error">{errors.password.message}</p>}

        {newUser && <label className="label dark:text-light">Confirm password</label>}
        {newUser && (
          <input
            onBlur={handleBlur}
            name="password_repeat"
            type="password"
            {...register("password_repeat", {
              validate: (value) => value === password.current || "The passwords do not match",
            })}
          />
        )}
        {errors?.password_repeat && <p className="error">{errors.password_repeat.message}</p>}

        <input
          onClick={handleSubmit(onSubmit)}
          type="submit"
          value={newUser ? "Sign up" : "Sign in"}
        />
        <span className="dark:text-light">
          {newUser ? "Already have an account? " : "Dont't have an account? "}
        </span>
        <a className="text-error accountLink" onClick={() => setNewUser(!newUser)}>
          {newUser ? "Sign in" : "Create an account"}
        </a>
      </form>
      <h6 className="mt-3" style={{ color: "red", textAlign: "center" }}>
        {user.error}
      </h6>
      <h6 className="text-center dark:text-light">Or</h6>
      <button
        onClick={handleGoogleSignIn}
        className="mx-auto d-block btn btn-outline-primary rounded-pill"
      >
        {/* <FontAwesomeIcon icon={faGoogle} size="1x" />  */}
        Continue with Google
      </button>
      <button
        onClick={handleFbSignIn}
        className="mx-auto d-block btn btn-outline-primary rounded-pill"
      >
        {/* <FontAwesomeIcon icon={faFacebook} size="1x" />  */}
        Continue with Facebook
      </button>
    </div>
  )
}

export default Login
