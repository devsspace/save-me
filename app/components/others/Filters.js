import bloodGroups from "@configs/fakeData/bloodGroups"
import districts from "@configs/fakeData/districts"
import AppButton from "./AppButton"
import AppDropdown from "./AppDropdown"

const Filters = ({
  filter = {},
  setFilter = () => null,
  onSubmit = () => null,
}) => {
  console.log(filter)
  return (
    <div className="w-full lg:w-1/2 mr-auto px-4 py-3 flex items-center sm:px-6">
      <div className="mr-3 w-40">
        <small className="dark:text-light">Blood Group:</small>
        <AppDropdown
          data={[{ id: 0, name: "All" }, ...bloodGroups]}
          name="bloodGroup"
          state={filter}
          setState={setFilter}
          className="border-2 border-gray-200 dark:border-none rounded"
          optionsClassName="!w-36"
        />
      </div>
      <div className="mr-3 w-40">
        <small className="dark:text-light">Location:</small>
        <AppDropdown
          data={[{ id: 0, name: "All" }, ...districts]}
          name="location"
          state={filter}
          setState={setFilter}
          className="border-2 border-gray-200 dark:border-none rounded"
          optionsClassName="!w-40"
        />
      </div>
      <div>
        <small>.</small>
        <AppButton onClick={onSubmit}>Filter</AppButton>
      </div>
    </div>
  )
}

export default Filters
