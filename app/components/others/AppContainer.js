export default function AppContainer({ children, className = "" }) {
  return (
    <section
      className={`bg-primaryGray dark:bg-dark px-5 lg:px-20 py-7 my-5 mt-14 ${className}`}
    >
      {children}
    </section>
  )
}
