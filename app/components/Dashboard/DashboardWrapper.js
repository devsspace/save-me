import withAuth from "@components/auth/withAuth"
import DashBoardProfile from "@components/Dashboard/DashboardProfile"
import DashButtons from "@components/Dashboard/DashButtons"
import DashLogo from "@components/Dashboard/DashLogo"
import { useUserContext } from "app/contexts/UserContext"
import { useEffect, useRef, useState } from "react"

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

  useEffect(() => {
    const admin = currentUser?.role.includes("admin")
    const doctor = currentUser?.role.includes("doctor")
    
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
      <section className="home-section">{
        permissible ? children : <h1 className="text-center text-5xl text-red-700">
      Increase your ability first!
    </h1>
      }</section>
    </>
  )
}

export default withAuth(DashboardWrapper)
