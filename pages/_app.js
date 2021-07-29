import BloodNavBar from "@components/bloodManagement/BloodNavBar"
import Footer from "@components/Footer/Footer"
import { ThemeProvider } from "next-themes"
import "../app/styles/datepickers.css"
import "../app/styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <BloodNavBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
