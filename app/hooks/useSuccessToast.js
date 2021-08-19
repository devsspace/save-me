import { toast } from "react-toastify"

export default function useSuccessToast(message = "Success <3!") {
  toast.success(message, {
    className:
      "bg-green-400 dark:bg-green-400 uppercase font-bold font-poppins text-white shadow-sm border-2 border-white rounded-md",
    progressClassName: "bg-gradient-to-r from-[#ffffff] to-[#b5b5b5]",
  })
}
