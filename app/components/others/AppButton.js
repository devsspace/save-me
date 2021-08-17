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
<<<<<<< HEAD
      className={`py-2 px-4 flex bg-primary rounded-md items-center cursor-pointer ${className}`}
=======
      className={`py-2 px-4 ${
        disabled ? "bg-gray-300" : "bg-primary"
      } flex rounded-md items-center ${className}`}
>>>>>>> 3d14b59b6b10f9dd6f9defe84084d8880f1df771
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
