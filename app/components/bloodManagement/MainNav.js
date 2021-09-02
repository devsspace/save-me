import NavButtons from "@components/bloodManagement/NavButtons"
import BrandLogo from "@components/Headers/BrandLogo"
import NavSearchField from "@components/Headers/NavSearchField"
import AppLink from "@components/others/AppLink"

export default function MainNav() {
  return (
    <header className="bg-gray-700 dark:bg-dark">
      <div className="flex items-center justify-between xl:px-14 py-2 container mx-auto">
        <AppLink href="/">
          <BrandLogo />
        </AppLink>
        <NavSearchField className="flex w-full md:w-1/3 h-8 md:h-10" />
        <NavButtons />
      </div>
    </header>
  )
}
