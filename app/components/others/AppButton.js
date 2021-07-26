export default function AppButton({
  onClick = null,
  text = "",
  Icon,
  className = "",
  iconClassName = "",
  textClassName = "",
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center bg-primary px-4 py-1 rounded-md text-white ${className}`}
    >
      {Icon && <Icon className={`w-6 h-6 mr-0.5 ${iconClassName}`} />}
      <button className={`text-lg uppercase font-bold ${textClassName}`}>
        {text}
      </button>
    </div>
  )
}
