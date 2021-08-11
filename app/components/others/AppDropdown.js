/* eslint-disable no-shadow */
import { Listbox, Transition } from "@headlessui/react"
import { Fragment, useEffect } from "react"
import { HiCheck, HiSelector } from "react-icons/hi"

export default function AppDropdown({
  name = "dropdown",
  data = null,
  state = {},
  setState = () => null,
  className = "",
  optionsClassName = "",
  optionClassName = "",
  disabled = false,
  ...others
}) {
  useEffect(
    () => !state[name] && setState({ ...state, [name]: data[0].name }),
    [state]
  )

  return (
    <div className="w-full">
      <Listbox
        value={state[name]}
        onChange={(data) => setState({ ...state, [name]: data.name })}
        disabled={disabled}
        {...others}
      >
        <div className="relative">
          <Listbox.Button
            className={`relative w-full focus:ring-2 focus:ring-primary py-2 pl-3 pr-10 text-left bg-white dark:bg-gray-600 rounded-md shadow-md cursor-pointer ${className}`}
          >
            <span className="block truncate text-dark">{state[name]}</span>
            {!disabled && (
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <HiSelector
                  className="w-5 h-5 text-gray-600 dark:text-light"
                  aria-hidden="true"
                />
              </span>
            )}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={`absolute w-full py-1 mt-1 overflow-auto bg-white dark:bg-gray-600 rounded-md shadow-md max-h-60 ring-1 ring-dark ring-opacity-5 focus:outline-none z-10 ${optionsClassName}`}
            >
              {data.map((person) => (
                <Listbox.Option
                  key={person.id}
                  className={({ active }) => `${
                    active
                      ? "text-dark bg-primaryLight dark:bg-dark"
                      : "text-dark"
                  }
cursor-default select-none relative py-2 pl-8 pr-4 ${optionClassName}`}
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-semibold" : "font-normal"
                        } block truncate`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-blue-600" : "text-blue-600"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <HiCheck
                            className="w-5 h-5 text-gray-600 dark:text-light"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
