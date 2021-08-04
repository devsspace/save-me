export default function DashBoardProfile() {
  return (
    <li className="profile">
      <div className="profile-details">
        <img
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          alt="profileImg"
        />
        <div className="name_job">
          <div className="name">Shohaul</div>
          <div className="job">PokPok Pokak</div>
        </div>
      </div>
      <i className="bx bx-log-out" id="log_out" />
    </li>
  )
}
