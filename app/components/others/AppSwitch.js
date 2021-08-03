import { Switch } from "@headlessui/react"

export default function AppSwitch({label, enabled = false, setEnabled = () => null}) {

  return (
    <div className="flex my-2">
      <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">{label}</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
    <span className="ml-2">
    {enabled ? label: <del>{label}</del>}
    </span>
    </div>
  )
}
