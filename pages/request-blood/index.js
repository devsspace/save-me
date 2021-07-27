import DarkMode from "@components/DarkMode"
import AppDatePicker from "@components/others/AppDatePicker"
import AppDropdown from "@components/others/AppDropdown"

const RequestBlood = () => {
    const bloodGroups = [
      { id: 1, name: "A+" },
      { id: 2, name: "A-" },
      { id: 3, name: "B+" },
      { id: 4, name: "B-" },
      { id: 5, name: "O+" },
      { id: 6, name: "O-" },
      { id: 7, name: "AB+" },
      { id: 8, name: "AB-" },
    ]
    const numberOfBag = [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
      { id: 3, name: "3" },
      { id: 4, name: "4" },
      { id: 5, name: "5" },
    ]
  return (
    <section className="container mx-auto">
      <DarkMode />
      <h1 className="text-3xl font-bold mt-5 mb-2">Request Blood</h1>
      <div>
        <div />

        <form className="space-y-5">
          <div>
            <label htmlFor="">Blood Group</label>
            <AppDropdown data={bloodGroups} />
          </div>

          <div>
            <label htmlFor="">Number Of Bags</label>
            <AppDropdown data={numberOfBag} />
          </div>

          <div>
            <label htmlFor="">Date</label>
            <AppDatePicker />
          </div>
        </form>
      </div>
    </section>
  )
}

export default RequestBlood