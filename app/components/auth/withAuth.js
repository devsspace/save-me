import LoadingSpinner from "@components/others/LoadingSpinner"
import { getUser } from "app/api"
import { useUserContext } from "app/contexts/UserContext"
import Login from "pages/user/login"
import { useEffect, useState } from "react"

export default function withAuth(Component) {
  const Auth = (props) => {
    const { currentUser, setCurrentUser } = useUserContext()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const checkUserAuthentication = async () => {
        setLoading(true)

        try {
          const { data } = await getUser()
          const user = data?.user || null

          setCurrentUser(user)
          setLoading(false)
        } catch (error) {
          console.warn("No user found from getUser function")
          setLoading(false)
        }
      }

      if (!currentUser) checkUserAuthentication()
    }, [])

    if (loading) {
      return <LoadingSpinner />
    }

    // If user is not logged in

    /** ------Option 1------ */
    if (!currentUser?.email) {
      return <Login />
    }

    /** ------Option 2------ */
    // if(!currentUser?.email) router.replace(`/user/login?from=${router.pathname}`)

    // If user is logged in
    return <Component {...props} />
  }

  // Copy getInitial props
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  return Auth

  /* ----------------------------- */
  // const HOCComponent = async ({ ...props }) => {
  //   return <Component {...props} />
  // }
  // HOCComponent.getInitialProps = async (context) => {

  //   const userAuth = await checkUserAuthentication()

  //   // Are you an authorized user or not?
  //   if (!userAuth?.email) {
  //     // Handle server-side rendering
  //     if (context.res) {
  //       context.res?.writeHead(302, {
  //         Location: loginRoute,
  //       })
  //       context.res?.end()
  //     } else {
  //       // Handle client-side rendering
  //       Router.replace(loginRoute)
  //     }
  //   } else if (Component.getInitialProps) {
  //     const wrappedProps = await Component.getInitialProps({
  //       ...context,
  //       auth: userAuth,
  //     })
  //     return { ...wrappedProps, userAuth }
  //   }

  //   return { userAuth }
  // }

  // return HOCComponent
}
