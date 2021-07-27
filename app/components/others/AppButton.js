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
      className={`full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-500 hover:bg-green-500 hover:shadow-lg focus:outline-none ${className}`}
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
