import BloodNavBar from "@components/bloodManagement/BloodNavBar"
import Footer from "@components/Footer/Footer"
import { DonorWrapper } from "app/contexts/DonorContext"
import { UserWrapper } from "app/contexts/UserContext"
import { ThemeProvider } from "next-themes"
import "../app/styles/dashboard.css"
import "../app/styles/datepickers.css"
import "../app/styles/globals.css"

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/dashboard")) {
    return (
      <ThemeProvider attribute="class">
        <DonorWrapper>
          <UserWrapper>
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
          <BloodNavBar />
          <Component {...pageProps} />
          <Footer />
        </UserWrapper>
      </DonorWrapper>
    </ThemeProvider>
  )
}

export default MyApp
