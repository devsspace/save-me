export default function AppInfoCard() {
  return (
    <div className="rounded-md overflow-hidden shadow-md bg-light">
      <img
        className="w-full h-32 sm:h-48 object-cover"
        src="/images/doctor3.png"
        alt=""
      />

      <div className="m-3">
        <p>Mr. Hagu</p>
        <p>Moja By Mario</p>
      </div>

      <div>Online</div>
    </div>
  )
}
