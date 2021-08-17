import { toast } from "react-toastify"

export default function useErrorToast(message = "Something Went Wrong!") {
  toast.success(message, {
    className:
      "bg-red-500 uppercase font-bold font-poppins text-white shadow-sm border-2 border-white rounded-md",
    progressClassName: "bg-gradient-to-r from-[#ffffff] to-[#b5b5b5]",
  })
}
