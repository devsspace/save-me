export default function AppButton({
  onClick = null,
  disabled = false,
  children,
  Icon,
  type = "",
  className = "",
  iconClassName = "",
  textClassName = "",
}) {
  return (
    <div
      className={`py-2 px-4 flex bg-primary rounded-md items-center cursor-pointer ${className}`}
    >
      {Icon && (
        <Icon className={`w-5 h-5 mr-0.5 text-white ${iconClassName}`} />
      )}
      <button
        className={`text-white flex items-center uppercase font-bold ${textClassName}`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}
