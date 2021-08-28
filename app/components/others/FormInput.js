import { ErrorMessage } from "@hookform/error-message"

export default function FormInput({
  Icon,
  name,
  className,
  type = "text",
  iconClassName,
  required = true,
  placeholder = "",
  register = () => null,
  errors = "",
  refnc = null,
  onBlur = null,
  ...otherInputProps
}) {
  const check = {}
  if (required) check.required = `You must specify ${name}`
  if (name === "password")
    check.minLength = {
      value: 6,
      message: "Password must contain at least 6 characters",
    }

  return (
    <>
      {Icon ? (
        <div className="relative">
          {Icon && (
            <Icon
              className={`absolute text-gray-600 dark:text-light top-3 left-3 ${iconClassName}`}
            />
          )}
          <input
            type={type}
            className={`placeholder-gray-400 rounded-md text-dark dark:text-light bg-white dark:bg-gray-600 shadow-md p-2 pl-10 focus:ring-2 focus:ring-primary border-none outline-none ${className}`}
            placeholder={placeholder}
            {...register(name, check)}
            ref={refnc}
            onBlur={onBlur}
            {...otherInputProps}
          />
        </div>
      ) : (
        <input
          type={type}
          className={`placeholder-gray-400 rounded-md text-dark dark:text-light bg-lighter dark:bg-gray-600 !ring-primary shadow-md border-none p-2 ${className}`}
          placeholder={placeholder}
          {...register(name, check)}
          ref={refnc}
          onBlur={onBlur}
          {...otherInputProps}
        />
      )}
      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className="text-error dark:text-error text-left text-sm">
              ⚠ {message}
            </p>
          )}
        />
      )}
    </>
  )
}
