export default function AppButton({
  onClick = null,
  disabled = false,
  children,
  Icon,
  type = "submit",
  className = "",
  iconClassName = "",
  textClassName = "",
}) {
  return (
    <div
      className={`py-2 px-4 bg-primary flex rounded-md items-center ${className}`}
    >
      {Icon && (
        <Icon
          className={`w-5 h-5 mr-0.5 text-white bg-primary ${iconClassName}`}
        />
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
