import { useState } from "react"
import DatePicker from "react-datepicker"

export default function AppDatePicker({
  name = "appDatePicker",
  state = {},
  setState = () => null,
}) {
  const [startDate, setDate] = useState(state.date)
  const [endDate] = useState(new Date().setMonth(startDate?.getMonth() + 1))

  const handleDateChange = (date) => {
    setDate(date)
    setState({ ...state, [name]: date })
  }
  return (
    <div className="relative">
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        nextMonthButtonLabel=">"
        previousMonthButtonLabel="<"
      />
    </div>
  )
}
