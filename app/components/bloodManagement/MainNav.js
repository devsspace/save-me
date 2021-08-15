import BrandLogo from "@components/Headers/BrandLogo"
import LeadNavButton from "@components/Headers/LeadNavButton"
import NavButton from "@components/Headers/NavButton"
import NavSearchField from "@components/Headers/NavSearchField"
import AppLink from "@components/Others/AppLink"
import { useUserContext } from "app/contexts/UserContext"
import { useTheme } from "next-themes"

export default function MainNav() {
  const { theme, setTheme } = useTheme()
  const { currentUser } = useUserContext()

  return (
    <header className="bg-gray-700 dark:bg-dark">
      <div className="flex items-center xl:px-14 py-2 container mx-auto">
        <AppLink href="/">
          <BrandLogo />
        </AppLink>
        <NavSearchField className="hidden sm:flex flex-grow h-10" />
        <div className="flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <NavButton
            span1Text="Turn"
            span2Text={theme === "dark" ? "On Lights" : "Off Lights"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <AppLink href="/doctors">
            <NavButton span1Text="Doctors" />
          </AppLink>
          <AppLink href="/search-donors">
            <NavButton span1Text="Search" span2Text="Donors" />
          </AppLink>
          <AppLink href="/request-blood">
            <NavButton span1Text="Blood" span2Text="Request" />
          </AppLink>

          {/* FIXME: I'll start from here */}
          {currentUser?.name ? (
            <AppLink href="/dashboard/add-donor-info">
              <NavButton span1Text={currentUser?.name} span2Text="My Account" />
            </AppLink>
          ) : (
            <AppLink href="/user/signup">
              <NavButton
                buttonClassName="animate-pulse"
                span1Text="Hey Anonymous!"
                span2Text="Register Now"
              />
            </AppLink>
          )}
          <AppLink href="/dashboard/add-donor-info">
            <LeadNavButton span1Text="0" span2Text="Dashboard" />
          </AppLink>
        </div>
      </div>
    </header>
  )
}
