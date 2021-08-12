export default function NavButton({
  onClick,
  GroupClassName,
  buttonClassName,
  span1Text,
  span2Text,
}) {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`flex items-center cursor-pointer ${GroupClassName}`}
    >
      <button
        className={`!text-white flex flex-col items-center space-y-0.5 hover:text-primary ${buttonClassName}`}
      >
        <span className="hidden md:inline text-white">{span1Text}</span>
        <span className="text-white" suppressHydrationWarning>
          {span2Text}
        </span>
      </button>
    </div>
  )
}
