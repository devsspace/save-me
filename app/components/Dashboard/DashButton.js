export default function DashButton({
  text = "",
  sideBarIsOpen,
  onClick = null,
  boxIcon = "",
  className = "",
  tooltip = text,
}) {
  return (
    <li onClick={onClick} className={`cursor-pointer ${className}`}>
      <a
        className={sideBarIsOpen || "!rounded-full"}
        onClick={(e) => e.preventDefault()}
      >
        <i className={`bx ${boxIcon}`} />
        <span className="links_name">{text}</span>
        <span className="tooltip !text-dark">{tooltip}</span>
      </a>
    </li>
  )
}
