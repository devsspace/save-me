export default function AppButton({
  onClick = null,
  children,
  Icon,
  className = "",
  iconClassName = "",
  textClassName = "",
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center bg-primary px-4 py-1 rounded-md shadow-md ${className}`}
    >
      {Icon && <Icon className={`w-5 h-5 mr-0.5 text-white ${iconClassName}`} />}
      <button className={`uppercase text-white font-bold ${textClassName}`}>
        {children}
      </button>
    </div>
  )
}
