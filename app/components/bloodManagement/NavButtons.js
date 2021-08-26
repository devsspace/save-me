import LeadNavButton from "@components/Headers/LeadNavButton"
import NavButton from "@components/Headers/NavButton"
import AppButton from "@components/others/AppButton"
import AppLink from "@components/others/AppLink"
import { Menu, Transition } from "@headlessui/react"
import { getUser } from "app/api/index"
import { useUserContext } from "app/contexts/UserContext"
import { useTheme } from "next-themes"
import { Fragment, useEffect } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi"

export default function NavButtons() {
  const { theme, setTheme } = useTheme()

  const { currentUser, setCurrentUser } = useUserContext()
  const doctor = currentUser?.role.includes("doctor")

  useEffect(() => {
    const checkUserAuthentication = async () => {
      try {
        const { data } = await getUser()
        const user = data?.user || null
        setCurrentUser(user)
      } catch (error) {
        console.warn("No user found from getUser function")
      }
    }

    if (!currentUser) checkUserAuthentication()
  }, [])

  return (
    <>
      <section className="hidden md:block">
        <div className="flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <NavButton
            span1Text="Turn"
            span2Text={theme === "dark" ? "On Lights" : "Off Lights"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          {doctor && (
            <AppLink href={`/call/${currentUser._id}`}>
              <NavButton span1Text="Start" span2Text="Visiting" />
            </AppLink>
          )}
          <AppLink href="/doctors">
            <NavButton span1Text="View" span2Text="Doctors" />
          </AppLink>
          <AppLink href="/search-donors">
            <NavButton span1Text="Search" span2Text="Donors" />
          </AppLink>
          <AppLink href="/request-blood">
            <NavButton span1Text="Blood" span2Text="Request" />
          </AppLink>
          {currentUser?.name ? (
            <AppLink href="/dashboard/add-donor-info">
              <NavButton span1Text={currentUser?.name} span2Text="My Account" />
            </AppLink>
          ) : (
            <AppLink href="/user/login">
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
      </section>

      <section className="block md:hidden">
        <div className="flex items-center text-xs space-x-6 whitespace-nowrap">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm rounded-md focus:outline-none">
                <HiOutlineMenuAlt3 className="text-white w-6 h-6" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-44 mt-2 z-10 bg-white dark:bg-gray-700 shadow origin-top-right rounded-md focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {() => (
                      <AppButton
                        className="dark:bg-gray-700"
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                      >
                        Turn {theme === "dark" ? "On" : "Off"} Lights
                      </AppButton>
                    )}
                  </Menu.Item>
                  {doctor && (
                    <Menu.Item>
                      <AppLink href={`/call/${currentUser._id}`}>
                        <AppButton className="mt-1.5 bg-primary dark:bg-gray-700">
                          Start visiting
                        </AppButton>
                      </AppLink>
                    </Menu.Item>
                  )}
                  <Menu.Item>
                    <AppLink href="/doctors">
                      <AppButton className="mt-1.5 bg-primary dark:bg-gray-700">
                        View Doctors
                      </AppButton>
                    </AppLink>
                  </Menu.Item>
                  <Menu.Item>
                    {() => (
                      <AppLink href="/search-donors">
                        <AppButton className="mt-1.5 bg-primary dark:bg-gray-700">
                          Search Donors
                        </AppButton>
                      </AppLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {() => (
                      <AppLink href="/request-blood">
                        <AppButton className="mt-1.5 bg-primary dark:bg-gray-700">
                          Blood Request
                        </AppButton>
                      </AppLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {() =>
                      currentUser?.name ? (
                        <AppLink href="/dashboard/add-donor-info">
                          <AppButton className="mt-1.5 bg-primary dark:bg-gray-700">
                            {currentUser?.name} My Account
                          </AppButton>
                        </AppLink>
                      ) : (
                        <AppLink href="/user/login">
                          <AppButton className="mt-1.5 bg-primary dark:bg-gray-700">
                            Register Now
                          </AppButton>
                        </AppLink>
                      )
                    }
                  </Menu.Item>
                  <Menu.Item>
                    {() => (
                      <AppLink href="/dashboard/add-donor-info">
                        <AppButton className="mt-1.5 bg-primary dark:bg-gray-700">
                          DashBoard
                        </AppButton>
                      </AppLink>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </section>
    </>
  )
}
