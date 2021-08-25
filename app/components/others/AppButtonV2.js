export default function AppButtonV2({
  className,
  onClick,
  Icon,
  textPrimary,
  textSecondary,
  iconClassName,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center shadow-md bg-white dark:bg-transparent group dark:hover:bg-white dark:ring-2 dark:ring-primary font-poppins active:bg-gray-100 text-dark dark:text-lighter pl-1 pr-3 py-1 rounded-md ${className}`}
    >
      {Icon && (
        <Icon className={`mr-1 w-8 h-8 text-primary ${iconClassName}`} />
      )}
      <div>
        <p className="text-left text-xs text-gray-500 group-hover:text-gray-500 !p-0">
          {textSecondary}
        </p>
        <p className="text-sm font-bold text-gray-600 group-hover:text-gray-600 !p-0">
          {textPrimary}
        </p>
      </div>
    </button>
  )
}
