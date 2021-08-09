import bloodGroups from "@configs/fakeData/bloodGroups"
import districts from "@configs/fakeData/districts"
import AppButton from "./AppButton"
import AppDropdown from "./AppDropdown"

const Filters = ({
  filter = {},
  setFilter = () => null,
  onSubmit = () => null,
}) => {
  return (
    <div className="w-1/3 mr-auto px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <AppDropdown
        data={[{ id: 0, name: "All" }, ...bloodGroups]}
        name="bloodGroup"
        state={filter}
        setState={setFilter}
        className="mr-3 border-2 border-gray-200 rounded"
        optionsClassName="!w-36"
      />
      <AppDropdown
        data={[{ id: 0, name: "All" }, ...districts]}
        name="location"
        state={filter}
        setState={setFilter}
        className="mr-3 border-2 border-gray-200 rounded"
        optionsClassName="!w-40"
      />
      <AppButton onClick={onSubmit}>Filter</AppButton>
    </div>
  )
}

export default Filters
