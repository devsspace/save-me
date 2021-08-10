import { useUserContext } from "app/contexts/UserContext"

export default function DashBoardProfile() {
  const { currentUser } = useUserContext()
  console.log(currentUser)
  return (
    <li className="profile">
      <div className="profile-details">
        <img
          src={
            currentUser.profilePic?.includes("http")
              ? currentUser.profilePic
              : "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          }
          alt="profileImg"
        />
        <div className="name_job">
          <div className="name">{currentUser.name}</div>
          <div className="job">{currentUser.role}</div>
        </div>
      </div>
      <i
        className="bx bx-log-out cursor-pointer"
        id="log_out"
        onClick={() => {
          localStorage.removeItem("profile")
          window.location.reload()
        }}
      />
    </li>
  )
}
