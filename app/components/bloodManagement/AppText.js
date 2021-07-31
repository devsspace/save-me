export default function AppText({
  Icon,
  className = "",
  onClick = null,
  text = "",
  textClassName = "",
  iconClassName = "",
}) {
  return (
    <div onClick={onClick} className={`flex items-center mr-1 ${className}`}>
      {Icon && (
        <Icon
          className={`text-gray-600 dark:text-light w-4 h-4 mr-1 ${iconClassName}`}
        />
      )}
      <p className={`${textClassName}`}>{text}</p>
    </div>
  )
}
