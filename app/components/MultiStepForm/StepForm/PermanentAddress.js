import AppButton from "@components/others/AppButton"
import { saveProfile } from "app/api"
import React from "react"

const PermanentAddress = ({ formData, setForm, navigation }) => {
  const { permanenttAdd, permanentPoliceStation, permanentDistrict } = formData
  
  const handleSave = () => {
    try {
      const { data } = saveProfile(formData)
      console.log(data)
      alert("Data successfully saved")
      
    } catch (error) {
      console.log(error.message || "something went wrong!")
    }
  }
  return (
    <>
      <div className="">
        <div className="min-h-screen p-0 sm:p-12">
          <div className="mx-auto max-w-md px-6 py-5 bg-white border-0 shadow-lg sm:rounded-3xl">
            <h1 className="text-center text-2xl">Permanent Address</h1>
            <form>
              <div className="w-full mb-5 my-5">
                <input
                  type="text"
                  onChange={setForm}
                  name="permanenttAdd"
                  value={permanenttAdd}
                  placeholder="Enter permanent address"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
              <div className="w-full mb-5">
                <input
                  type="text"
                  onChange={setForm}
                  name="permanentPoliceStation"
                  value={permanentPoliceStation}
                  placeholder="Enter permanent police station"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
              <div className="w-full mb-5">
                <input
                  type="text"
                  name="permanentDistrict"
                  onChange={setForm}
                  value={permanentDistrict}
                  placeholder="Enter permanent district"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
            </form>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <AppButton onClick={() => navigation.previous()} className="w-20">
                Back
              </AppButton>
              <AppButton onClick={handleSave} className="w-20">
                Save
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PermanentAddress
