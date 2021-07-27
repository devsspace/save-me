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
  ...otherInputProps
}) {
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
            className={`placeholder-gray-400 rounded-md focus:ring-2 focus:!ring-primary text-dark dark:text-light bg-white dark:bg-gray-600 shadow-md border-none pl-10 ${className}`}
            placeholder={placeholder}
            {...register(name, { required: required && `You must specify ${name}` })}
            {...otherInputProps}
          />
        </div>
      ) : (
        <input
          type={type}
          className={`placeholder-gray-400 rounded-md text-dark dark:text-light bg-lighter dark:bg-gray-600 !ring-primary shadow-md border-none ${className}`}
          placeholder={placeholder}
          {...register(name, { required: required && `You must specify ${name}` })}
          {...otherInputProps}
        />
      )}
      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <p className="text-error error">{message}</p>}
        />
      )}
    </>
  )
}
