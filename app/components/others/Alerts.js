import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const MySwal = withReactContent(Swal)

export const successAlert = (message) => MySwal.fire("Success!", message, "success")
export const errorAlert = (message = "Something went wrong!") => MySwal.fire("Error!", message, "error")
