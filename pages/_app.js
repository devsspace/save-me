import MainNav from "@components/bloodManagement/MainNav"
import { DonorWrapper } from "app/contexts/DonorContext"
import { UserWrapper } from "app/contexts/UserContext"
import { ThemeProvider } from "next-themes"
import { Slide, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../app/styles/coming-soon.css"
import "../app/styles/dashboard.css"
import "../app/styles/datepickers.css"
import "../app/styles/globals.css"
import "../app/styles/login.css"

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/dashboard")) {
    return (
      <ThemeProvider attribute="class">
        <DonorWrapper>
          <UserWrapper>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              newestOnTop
              closeOnClick
              draggable
              pauseOnHover
              transition={Slide}
            />
            <Component {...pageProps} />
          </UserWrapper>
        </DonorWrapper>
      </ThemeProvider>
    )
  }
  return (
    <ThemeProvider attribute="class">
      <DonorWrapper>
        <UserWrapper>
          <MainNav />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            newestOnTop
            closeOnClick
            draggable
            pauseOnHover
            transition={Slide}
          />
          <Component {...pageProps} />
        </UserWrapper>
      </DonorWrapper>
    </ThemeProvider>
  )
}

export default MyApp
