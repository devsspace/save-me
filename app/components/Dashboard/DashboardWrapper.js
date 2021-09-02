import withAuth from "@components/auth/withAuth"
import DashBoardProfile from "@components/Dashboard/DashboardProfile"
import DashButtons from "@components/Dashboard/DashButtons"
import DashLogo from "@components/Dashboard/DashLogo"
import { useUserContext } from "app/contexts/UserContext"
import { useEffect, useRef, useState } from "react"
import { MdVerifiedUser } from "react-icons/md"

function DashboardWrapper({ children, adminOnly, forDoctor }) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
  const closeBtnRef = useRef()
  const sideBarRef = useRef()
  const { currentUser } = useUserContext()
  const [permissible, setPermissible] = useState(true)

  const menuBtnChange = () => {
    if (sideBarRef.current.classList.contains("open")) {
      setSideBarIsOpen(true)
      closeBtnRef.current.classList.replace("bx-menu", "bx-menu-alt-right")
    } else {
      setSideBarIsOpen(false)
      closeBtnRef.current.classList.replace("bx-menu-alt-right", "bx-menu")
    }
  }

  const handleCloseBtn = () => {
    sideBarRef.current.classList.toggle("open")
    menuBtnChange()
  }
  
  let admin, doctor

  useEffect(() => {
    admin = currentUser?.role.includes("admin")
    doctor = currentUser?.role.includes("doctor")
    
    if (adminOnly && !admin) setPermissible(false)
    if (forDoctor && !(doctor || admin)) setPermissible(false)

  }, [currentUser, adminOnly, forDoctor])

  return (
    <>
      <div className="sidebar" ref={sideBarRef}>
        <div className="logo-details">
          <DashLogo />
          <i
            className="bx bx-menu"
            id="btn"
            ref={closeBtnRef}
            onClick={handleCloseBtn}
          />
        </div>
        <ul className="nav-list">
          <DashButtons sideBarIsOpen={sideBarIsOpen} />
          <DashBoardProfile />
        </ul>
      </div>
      <section className="home-section">
        {currentUser?.role.includes("doctor") && currentUser?.bmdcNumber ? (
          currentUser?.isVerifiedDoctor === "Verified" ? (
            <div className="absolute top-2 right-5 flex items-center text-green-500">
              <MdVerifiedUser className=" text-xl" /> Verified Doc
            </div>
          ) : (
            <div className="w-full text-center text-light py-2 bg-yellow-500">
              We received your profile. Please wait to be verified
            </div>
          )
        ) : (
          <div className="w-full text-center text-light py-3 bg-error">
            Complete your profile to get verified soon
          </div>
        )}
        {permissible ? (
          children
        ) : (
          <h1 className="text-center mt-10 text-5xl text-red-700">
            Increase your ability first!
          </h1>
        )}
      </section>
    </>
  )
}

export default withAuth(DashboardWrapper)
