import AppContainer from "@components/others/AppContainer"
import React from "react"

const DoctorsInfo2 = ({ docotr }) => {
  return (
    <div>
      {/* doctors title */}
      <AppContainer>
        <div className="flex flex-row">
          <div>
            <img
              className="w-28 h-28 rounded-full"
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRvY3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div></div>
        </div>
      </AppContainer>
    </div>
  )
}

export default DoctorsInfo2
