import Button from "@material-ui/core/Button"
import React from "react"

const PresentAddress = ({ formData, setForm, navigation }) => {
  const { nid, presentAdd, presentPoliceStation, presentDistrict } = formData
  return (
    <>
      <div className="my-12">
        <div className="min-h-screen p-0 sm:p-12">
          <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
            <form>
              <div className="w-full mb-5">
                <input
                  type="text"
                  name="nid"
                  onChange={setForm}
                  value={nid}
                  placeholder="Enter NID number"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
              <div className="w-full mb-5">
                <input
                  type="text"
                  onChange={setForm}
                  name="presentAdd"
                  value={presentAdd}
                  placeholder="Enter present address"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
              <div className="w-full mb-5">
                <input
                  type="text"
                  onChange={setForm}
                  name="presentPoliceStation"
                  value={presentPoliceStation}
                  placeholder="Enter present police station"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
              <div className="w-full mb-5">
                <input
                  type="text"
                  name="presentDistrict"
                  onChange={setForm}
                  value={presentDistrict}
                  placeholder="Enter present district"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
            </form>
            <div style={{ marginTop: "1rem" }}>
              <Button
                color="secondary"
                variant="contained"
                style={{ marginRight: "1rem" }}
              >
                Back
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={() => navigation.next()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PresentAddress
