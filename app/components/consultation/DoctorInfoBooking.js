import AppButtonV2 from "@components/others/AppButtonV2"
import AppDatePicker from "@components/others/AppDatePicker"
import AppModal from "@components/others/AppModal"
import FormInput from "@components/others/FormInput"
import { GiRose } from "react-icons/gi"

export default function DoctorInfoBooking({ modalOpen, setModalOpen }) {
  return (
    <AppModal
      isOpen={modalOpen}
      setIsOpen={setModalOpen}
      title="Please Select a Date To Continue!"
    >
      <div className="mt-2 h-64 space-y-3">
        <div>
          <label className="text-xs font-medium">
            <span className="text-red-500">*</span> Enter Date
          </label>
          <AppDatePicker className="!w-[212px]" />
        </div>
        <div>
          <label className="text-xs font-medium block mb-0.5">
            <span className="text-red-500">*</span> Your Name
          </label>
          <FormInput placeholder="Your Name" />
        </div>
        <div>
          <label className="text-xs font-medium block mb-0.5">
            <span className="text-red-500">*</span> Your Email
          </label>
          <FormInput placeholder="Your Email" />
        </div>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="inline-flex justify-center"
          onClick={() => setModalOpen(false)}
        >
          <AppButtonV2
            textPrimary="Thank You"
            textSecondary="Okay"
            Icon={GiRose}
          />
        </button>
      </div>
    </AppModal>
  )
}
