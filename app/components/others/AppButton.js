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
      className={`px-6 py-2 text-white transition-all duration-150 ease-linear rounded-md shadow-md outline-none bg-primary hover:bg-green-500  flex items-center ${className}`}
    >
      {Icon && (
        <Icon className={`w-5 h-5 mr-0.5 text-white ${iconClassName}`} />
      )}
      <button className={`uppercase text-white font-bold ${textClassName}`}>
        {children}
      </button>
    </div>
  )
}
