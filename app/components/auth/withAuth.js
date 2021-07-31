import Router from "next/router"

const loginRoute = "/user/login?redirected=true"

const checkUserAuthentication = async () => {
  // const user = currentUser (from userContext) || await getUser()
  const user = {email: "test@test.com"}

  return user
}

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.getInitialProps = async (context) => {
    const userAuth = await checkUserAuthentication()

    // Are you an authorized user or not?
    if (!userAuth?.email) {
      // Handle server-side rendering
      if (context.res) {
        context.res?.writeHead(302, {
          Location: loginRoute,
        })
        context.res?.end()
      } else {
        // Handle client-side rendering
        Router.replace(loginRoute)
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: userAuth,
      })
      return { ...wrappedProps, userAuth }
    }

    return { userAuth }
  }

  return hocComponent
}
