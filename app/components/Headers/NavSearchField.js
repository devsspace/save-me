import FormInput from "@components/others/FormInput"

export default function NavSearchField({ className }) {
  return (
    <div
      className={`bg-primary active:bg-gray-400 items-center rounded-full cursor-pointer ml-3 ${className}`}
    >
      <FormInput
        placeholder="Search Anywhere!"
        className="p-2 h-full w-6 flex-grow focus:ring-0 flex-shrink rounded-full px-4 rounded-r-none"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 p-4 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}
