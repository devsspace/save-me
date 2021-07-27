import { useState } from "react"
import DatePicker from "react-datepicker"

export default function AppDatePicker() {
  const [startDate, setDate] = useState(new Date())
  const [endDate] = useState(new Date().setMonth(startDate.getMonth() + 1))
  return (
    <div className="relative">
      <DatePicker
        selected={startDate}
        onChange={(date) => setDate(date)}
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
