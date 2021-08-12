import DashButton from "@components/Dashboard/DashButton"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { getUser } from "app/api"
import { useUserContext } from "app/contexts/UserContext"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useRouter } from "next/router"
import { Fragment, useEffect } from "react"
import { FiAlignLeft, FiX } from "react-icons/fi"
import { RiUserHeartFill } from "react-icons/ri"

const navigation = [
  { name: "Home", href: "/", current: false },
  // { name: "About us", href: "#", current: false },
  { name: "Search Donors", href: "/search-donors", current: false },
  { name: "Blood Request", href: "/request-blood", current: false },
  { name: "Register", href: "/user/signup", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const BloodNavBar = () => {
  const { theme, setTheme } = useTheme()

  // dark mode theme change
  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  const { currentUser, setCurrentUser } = useUserContext()
  const router = useRouter()

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
    <Disclosure as="nav" className="100 md:bg-primaryLight dark:bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FiAlignLeft className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a className="text-green-500 text-2xl font-bold">SaveMe</a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-blue-400"
                              : "text-green-600 hover:bg-primary hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* dark mode */}
                <DashButton
                  className={`list-none ${
                    theme === "light"
                      ? "text-black"
                      : "text-white md:text-yellow-400"
                  } text-2xl`}
                  onClick={handleChangeTheme}
                  boxIcon={theme === "light" ? "bxs-moon" : "bxs-sun"}
                />
                {/* Profile dropdown */}
                {currentUser ? (
                  <Menu as="div" className="ml-3 relative z-50">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="flex">
                            <RiUserHeartFill className="text-2xl text-green-400" />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/dashboard/add-donor-info">
                                  <a
                                    className={classNames(
                                      active ? "bg-green-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Profile
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                  onClick={() => {
                                    localStorage.removeItem("profile")
                                    window.location.reload()
                                  }}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                ) : (
                  <Link href="/user/login">
                    <a
                      href="/user/login"
                      className="text-green-600 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-green-700 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default BloodNavBar
