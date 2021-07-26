import DarkMode from "@components/DarkMode"
import FormInput from "@components/others/FormInput"
import { AiFillHeart } from "react-icons/ai"

export default function SearchDonorsPage() {
  return (
    <section>
      <DarkMode />
      <h1 className="text-3xl font-bold mt-5 ml-5">Search Donors</h1>
      <div>
        <FormInput Icon={AiFillHeart} />
      </div>
    </section>
  )
}
