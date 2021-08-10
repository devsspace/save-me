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
    <>
      {Icon && (
        <Icon className={`w-5 h-5 mr-0.5 text-white ${iconClassName}`} />
      )}
      <button
        className={`py-2 px-4 text-white transition-all duration-150 ease-linear rounded-md shadow-md outline-none bg-primary flex items-center uppercase text-white font-bold ${textClassName} ${
          disabled ? "!bg-gray-300" : "hover:bg-green-500"
        } ${className}`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  )
}
