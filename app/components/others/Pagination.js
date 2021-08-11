import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Pagination({previous, next, skip, setSkip, limit, total}) {
  const n = Math.ceil(total/limit)
  const from = skip + 1
  const to = skip + limit < total ? skip + limit : total
  const current = Math.ceil(to/limit);
  
  return (
    <div className="bg-white dark:bg-dark px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mb-12">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          onClick={previous}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white active:bg-gray-200 cursor-pointer"
        >
          Previous
        </a>
        <a
          onClick={next}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white active:bg-gray-200 cursor-pointer"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{from}</span> to{" "}
            <span className="font-medium">{to}</span> of{" "}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <span
              onClick={previous}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white dark:bg-dark text-sm font-medium text-gray-500 hover:!bg-primaryLight dark:hover:text-dark cursor-pointer"
            >
              <span className="sr-only">Previous</span>
              <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
            </span>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {n &&
              [...Array(n).keys()].map((i) => {
                return (
                  <a
                    href="#"
                    onClick={() => setSkip(limit * i)}
                    aria-current="page"
                    className={`z-10 relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      i + 1 === current
                        ? "bg-indigo-50 dark:bg-primaryLight border-indigo-500 text-indigo-600 z-20"
                        : "bg-white dark:bg-dark border-gray-300 text-gray-500 hover:!bg-primaryLight dark:hover:text-dark"
                    }`}
                  >
                    {i + 1}
                  </a>
                )
              })}

            <span
              onClick={next}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white dark:bg-dark text-sm font-medium text-gray-500 hover:!bg-primaryLight dark:hover:text-dark cursor-pointer"
            >
              <span className="sr-only">Next</span>
              <BsChevronRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </nav>
        </div>
      </div>
    </div>
  )
}
