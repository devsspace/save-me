export default function AppContainer({ children, className = "" }) {
  return (
    <section
      className={`bg-primaryGray dark:bg-dark px-5 xl:px-[150px] 2xl:px-[360px] py-7 my-5 mt-14 ${className}`}
    >
      {children}
    </section>
  )
}
