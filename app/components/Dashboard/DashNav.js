import DashBoardProfile from "@components/Dashboard/DashboardProfile"
import DashButtons from "@components/Dashboard/DashButtons"
import DashLogo from "@components/Dashboard/DashLogo"
import { useRef, useState } from "react"

export default function DashNav({ children }) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
  const closeBtnRef = useRef()
  const sideBarRef = useRef()

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
        <div>{children}</div>
      </section>
    </>
  )
}
