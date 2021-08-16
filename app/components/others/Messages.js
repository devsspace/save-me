export const WarningMessage = ({ message = "Warning" }) => (
  <div
    className="bg-yellow-100 border border-yellow-400 w-80 m-auto px-4 py-2 rounded"
    role="alert"
  >
    <span className="block sm:inline text-yellow-700">⚠ {message}</span>
  </div>
)
export const ErrorMessage = ({ message = "Error!" }) => (
  <div
    className="bg-red-100 border border-red-400 px-4 py-3 rounded relative"
    role="alert"
  >
    <span className="block sm:inline text-red-700">{message}</span>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3 text-red-700">
      ⚠
    </span>
  </div>
)
