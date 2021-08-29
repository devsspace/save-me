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
      onClick={onClick}
      className={`py-1.5 px-4 flex bg-primary hover:bg-primaryLightBlue
      active:ring-2 active:shadow-lg active:ring-gray-300 active:bg-primary dark:active:ring-gray-600
      rounded-md items-center cursor-pointer shadow ${
        disabled && "!bg-gray-400 !cursor-not-allowed"
      } ${className}`}
    >
      {Icon && (
        <Icon className={`w-5 h-5 mr-0.5 text-white ${iconClassName}`} />
      )}
      <button
        className={`text-white flex items-center uppercase font-bold ${
          disabled && "!cursor-not-allowed"
        } ${textClassName}`}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}
