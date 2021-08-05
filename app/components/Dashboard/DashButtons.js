import DashButton from "@components/Dashboard/DashButton"
import AppLink from "@components/others/AppLink"
import { useTheme } from "next-themes"

export default function DashButtons({ sideBarIsOpen }) {
  const { theme, setTheme } = useTheme()
  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <>
      <AppLink href="/">
        <DashButton
          sideBarIsOpen={sideBarIsOpen}
          boxIcon="bx-grid-alt"
          text="Dashboard"
        />
      </AppLink>
      <AppLink href="/">
        <DashButton
          sideBarIsOpen={sideBarIsOpen}
          boxIcon="bxs-message-dots"
          text="Messages"
        />
      </AppLink>
      <AppLink href="/">
        <DashButton
          sideBarIsOpen={sideBarIsOpen}
          boxIcon="bx-code-alt"
          text="Requests"
        />
      </AppLink>
      <AppLink href="/">
        <DashButton
          sideBarIsOpen={sideBarIsOpen}
          boxIcon="bxs-droplet"
          text="Donations"
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
