import withAuth from "@components/auth/withAuth"
import AppButton from "@components/others/AppButton"
import { useUserContext } from "app/contexts/UserContext"
import { AiOutlineSend } from "react-icons/ai"

function VideoChatPage() {
  const { currentUser } = useUserContext()

  return (
    <div className="flex video-chat-page antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-light dark:bg-dark flex-shrink-0">
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-light bg-primary h-10 w-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl dark:text-light">
              Messages
            </div>
          </div>
          <div className="flex flex-col items-center bg-primaryLight dark:bg-gray-700 shadow-md mt-4 w-full py-6 px-4 rounded-md">
            <div className="h-20 w-20 rounded-full border overflow-hidden">
              <img
                src="https://scontent.fdac24-1.fna.fbcdn.net/v/t31.18172-8/18839623_1278674802241532_4345484447607416879_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=EcnbFX7tG_kAX9FhRzE&_nc_ht=scontent.fdac24-1.fna&oh=969ff940032ee5aca146397b6c81fbd0&oe=6144DFD7"
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-sm font-semibold mt-2 dark:text-light">
              {currentUser.name}
            </div>
            <div className="text-xs text-gray-500 dark:text-light">
              MBBS, ABCDE
            </div>
            <div className="flex flex-row items-center mt-3 bg-light dark:bg-gray-500 px-2 py-1 rounded-md">
              <div className="flex flex-col justify-center h-4 w-4 bg-green-500 rounded-full" />
              <div className="leading-none ml-1 text-xs dark:text-light">
                Active
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Active Conversations</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                4
              </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto">
              <button className="flex flex-row items-center bg-primary text-white rounded-md p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                  H
                </div>
                <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
              </button>
              <button className="flex flex-row items-center dark:hover:bg-gray-500 hover:bg-primaryLight rounded-md p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                  M
                </div>
                <div className="ml-2 text-sm font-semibold">Marta Curtis</div>
                <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                  2
                </div>
              </button>
              <button className="flex flex-row items-center dark:hover:bg-gray-500 hover:bg-primaryLight rounded-md p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full">
                  P
                </div>
                <div className="ml-2 text-sm font-semibold">Philip Tucker</div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-md bg-gray-100 dark:bg-gray-700 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white dark:bg-gray-500 dark:text-white rounded-md shadow py-2 px-4">
                        <div>Hai Apu Kamon acan?</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white dark:bg-gray-500 dark:text-white rounded-md shadow py-2 px-4">
                        <div>
                          Bari Kotai? Ki Koran? Bat Khaisan? Bap ki kora? ar ma
                          housewipe to?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500 flex-shrink-0">
                        B
                      </div>
                      <div className="relative mr-3 text-sm bg-primaryLight rounded-md shadow py-2 px-4">
                        <div>Apnar Somossa Ki?</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white dark:bg-gray-500 dark:text-white rounded-md shadow py-2 px-4">
                        <div>
                          Apner BF Acha? Amer GF Hoban? AiLaBiu (Gulabi Dil 💗)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white dark:bg-gray-500 dark:text-white rounded-md shadow py-2 px-4">
                        <div className="flex flex-row items-center">
                          <button className="flex items-center justify-center bg-primary hover:bg-primaryLight rounded-full h-8 w-10">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                          <div className="flex flex-row items-center space-x-px ml-4">
                            <div className="h-2 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-4 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-8 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-8 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-10 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-10 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-12 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-10 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-6 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-5 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-4 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-3 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-10 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-10 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-8 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-8 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-1 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-1 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-8 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-8 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                            <div className="h-4 w-1 bg-gray-500 dark:bg-white rounded-lg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center h-16 shadow rounded-md bg-white dark:bg-gray-500 w-full px-4">
              <div>
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="flex w-full border-2 border-gray-300 focus:border-none dark:border-none rounded-md outline-none focus:ring-2 focus:ring-primary pl-4 h-10"
                  />
                  <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="ml-4">
                <AppButton Icon={AiOutlineSend}>Send</AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuth(VideoChatPage)