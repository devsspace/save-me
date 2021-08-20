import DashButton from "@components/Dashboard/DashButton"
import AppLink from "@components/others/AppLink"
import { useUserContext } from "app/contexts/UserContext"
import { useTheme } from "next-themes"
import { useRouter } from "next/router"
import { useState } from "react"

export default function DashButtons({ sideBarIsOpen }) {
  const { theme, setTheme } = useTheme()
  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  const router = useRouter()
  const { currentUser } = useUserContext()
  const [active, setActive] = useState(router.pathname)
  console.log(active)
  return (
    <>
      <AppLink href="/">
        <DashButton
          sideBarIsOpen={sideBarIsOpen}
          boxIcon="bx-grid-alt"
          text="Donor's Profile"
          onClick={() => router.push("/dashboard/add-donor-info")}
          className={
            active === "/dashboard/add-donor-info" ? "!bg-primaryDark" : ""
          }
        />
      </AppLink>

      <AppLink href="/">
        <DashButton
          sideBarIsOpen={sideBarIsOpen}
          boxIcon="bx-grid-alt"
          text="Doctor's Profile"
          onClick={() => router.push("/dashboard/add-doctor-info")}
          className={
            active === "/dashboard/add-doctor-info" ? "!bg-primaryDark" : ""
          }
        />
      </AppLink>


      {currentUser.role.includes("admin") && (
        <AppLink href="/">
          <DashButton
            sideBarIsOpen={sideBarIsOpen}
            boxIcon="bxs-donate-blood"
            text="Donors"
            onClick={() => router.push("/dashboard/donors")}
            className={
              active === "/dashboard/donors" ? "!bg-primaryDark" : ""
            }
          />
        </AppLink>
      )}
      <AppLink href="/">
        <DashButton
          sideBarIsOpen={sideBarIsOpen}
          boxIcon="bxs-droplet"
          text="Donations"
          onClick={() => router.push("/dashboard/donations")}
          className={active === "/dashboard/donations" ? "!bg-primaryDark" : ""}
        />
      </AppLink>
      <AppLink href="/">
        <DashButton
          sideBarIsOpen={sideBarIsOpen}
          boxIcon="bxs-help-circle"
          text="Requests"
          onClick={() => router.push("/dashboard/requests")}
          className={active === "/dashboard/requests" ? "!bg-primaryDark" : ""}
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
