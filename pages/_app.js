import BloodNavBar from "@components/bloodManagement/BloodNavBar"
import Footer from "@components/Footer/Footer"
import { DonorContext } from "app/contexts/DonorContext"
import { UserWrapper } from "app/contexts/UserContext"
import { ThemeProvider } from "next-themes"
import "../app/styles/datepickers.css"
import "../app/styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DonorContext>
        <UserWrapper>
          <BloodNavBar />
          <Component {...pageProps} />
          <Footer />
        </UserWrapper>
      </DonorContext>
    </ThemeProvider>
  )
}

export default MyApp
