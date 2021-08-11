import DashButton from "@components/Dashboard/DashButton"
import AppLink from "@components/others/AppLink"
import { useUserContext } from "app/contexts/UserContext"
import { useTheme } from "next-themes"
import { useRouter } from "next/router"

export default function DashButtons({ sideBarIsOpen }) {
  const { theme, setTheme } = useTheme()
  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  const router = useRouter()
  const { currentUser } = useUserContext()

  return (
    <>
      <AppLink href="/">
        <DashButton
          sideBarIsOpen={sideBarIsOpen}
          boxIcon="bx-grid-alt"
          text="Profile"
          onClick={() => router.push("/dashboard/add-donor-info")}
        />
      </AppLink>
      {currentUser.role === "admin" && (
        <AppLink href="/">
          <DashButton
            sideBarIsOpen={sideBarIsOpen}
            boxIcon="bxs-donate-blood"
            text="Donors"
            onClick={() => router.push("/dashboard/donors")}
          />
        </AppLink>
      )}
      <AppLink href="/">
        <DashButton
          sideBarIsOpen={sideBarIsOpen}
          boxIcon="bxs-droplet"
          text="Donations"
          onClick={() => router.push("/dashboard/donations")}
        />
      </AppLink>
      <AppLink href="/">
        <DashButton
          sideBarIsOpen={sideBarIsOpen}
          boxIcon="bxs-help-circle"
          text="Requests"
          onClick={() => router.push("/dashboard/requests")}
        />
      </AppLink>
      <AppLink href="/">
        <DashButton
          sideBarIsOpen={sideBarIsOpen}
          boxIcon="bxs-bar-chart-alt-2"
          text="Ranking"
        />
      </AppLink>
      <DashButton
        sideBarIsOpen={sideBarIsOpen}
        onClick={handleChangeTheme}
        boxIcon={theme === "light" ? "bxs-sun" : "bxs-moon"}
        text={theme === "light" ? "TurnOFF" : "TurnON"}
      />
    </>
  )
}
