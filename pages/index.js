import DarkMode from "../app/components/DarkMode"

export default function Home() {
  return (
    <section>
      <div className="text-right mt-5 mr-10">
        <DarkMode />
      </div>
      <div className="flex flex-col space-y-2 items-center h-[90vh] justify-center">
        <h1 className="text-9xl font-extrabold text-gray-600 dark:text-gray-200">
          Save Me
        </h1>
        <a
          target="_blank"
          href="https://youtu.be/dQw4w9WgXcQ"
          className="text-gray-600 animate-pulse dark:text-gray-200"
        >
          Click Here & I'll Save You!
        </a>
      </div>
    </section>
  )
}
