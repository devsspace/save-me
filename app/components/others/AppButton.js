export default function AppButton({
  onClick = null,
  disabled = false,
  children,
  Icon,
  className = "",
  iconClassName = "",
  textClassName = "",
}) {
  return (
    <div
      className={`px-6 py-2 text-white transition-all duration-150 ease-linear rounded-md shadow-md outline-none bg-primary   flex items-center ${disabled ? "!bg-gray-300" : "hover:bg-green-500"} ${className}`}
    >
      {Icon && (
        <Icon className={`w-5 h-5 mr-0.5 text-white ${iconClassName}`} />
      )}
      <button
        className={`uppercase text-white font-bold ${textClassName}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}
