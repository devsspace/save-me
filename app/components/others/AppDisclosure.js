import { Disclosure } from "@headlessui/react"
import { HiChevronDown } from "react-icons/hi"

export default function AppDisclosure({ question, answer }) {
  return (
    <div className="w-full max-w-md p-1 dark:p-0 mx-auto bg-light rounded-md">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-primaryLight dark:bg-gray-600 rounded-md group hover:bg-primary dark:hover:bg-primary focus:outline-none focus-visible:ring-primary focus-visible:ring-opacity-75">
              <span className="group-hover:text-white">{question}</span>
              <HiChevronDown
                className={`${
                  open
                    ? "transform rotate-180 group-hover:text-light dark:text-light"
                    : ""
                } w-5 h-5 text-gray-600 group-hover:text-light dark:text-light`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {answer}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
