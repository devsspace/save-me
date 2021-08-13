import MainNav from "@components/bloodManagement/MainNav"
import { DonorWrapper } from "app/contexts/DonorContext"
import { UserWrapper } from "app/contexts/UserContext"
import { ThemeProvider } from "next-themes"
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
          <Component {...pageProps} />
        </UserWrapper>
      </DonorWrapper>
    </ThemeProvider>
  )
}

export default MyApp
