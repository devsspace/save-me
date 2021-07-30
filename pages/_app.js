import BloodNavBar from "@components/bloodManagement/BloodNavBar"
import Footer from "@components/Footer/Footer"
import { AppWrapper } from "app/contexts/AppContext"
import { ThemeProvider } from "next-themes"
import "../app/styles/datepickers.css"
import "../app/styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <ThemeProvider attribute="class">
        <BloodNavBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </AppWrapper>
  )
}

export default MyApp
