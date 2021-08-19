import { toast } from "react-toastify"

export default function useWarningToast(message = "Warning!") {
  toast.success(message, {
    className:
      "bg-yellow-400 uppercase font-bold font-poppins text-white shadow-sm border-2 border-white rounded-md",
    progressClassName:
      "bg-gradient-to-r from-[#F6732E] via-[#ff8747] to-[#ffb087]",
  })
}
