import BloodNavBar from "@components/bloodManagement/BloodNavBar"
import { ThemeProvider } from "next-themes"
import "../app/styles/datepickers.css"
import "../app/styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <BloodNavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
