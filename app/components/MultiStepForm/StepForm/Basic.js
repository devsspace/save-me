import AppButton from "@components/others/AppButton"
import React from "react"

const Basic = ({ formData, setForm, navigation }) => {
  const {
    fullName,
    bloodGroup,
    gender,
    mobileNumber,
    dateOfBirth,
    lastDonation,
  } = formData

  return (
    <>
      <div className="my-12">
        <div className="min-h-screen p-0 sm:p-12">
          <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
            <form>
              <div className="w-full mb-5">
                <label className="text-gray-500">Name</label>
                <input
                  type="text"
                  onChange={setForm}
                  name="fullName"
                  value={fullName}
                  placeholder="Enter name"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
              <div className="w-full mb-5">
                <label className="text-gray-500">Blood Group</label>
                <select
                  name="bloodGroup"
                  onChange={setForm}
                  value={bloodGroup}
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                >
                  <option value="Select">Select</option>
                  <option value="A (+VE)">A (+VE)</option>
                  <option value="A (-VE)">A (-VE)</option>
                  <option value="B (+VE)">B (+VE)</option>
                  <option value="B (-VE)">B (-VE)</option>
                  <option value="O (+VE)">O (+VE)</option>
                  <option value="O (-VE)">O (-VE)</option>
                  <option value="AB (+VE)">AB (+VE)</option>
                  <option value="AB (-VE)">AB (-VE)</option>
                </select>
              </div>
              <div className="w-full mb-5">
                <label className="text-gray-500">Gender</label>
                <select
                  name="gender"
                  onChange={setForm}
                  value={gender}
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                >
                  <option value="Select">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="w-full mb-5">
                <label className="text-gray-500">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  onChange={setForm}
                  name="mobileNumber"
                  value={mobileNumber}
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
              <div className="w-full mb-5">
                <label className="text-gray-500">Date of birth</label>
                <input
                  type="date"
                  onChange={setForm}
                  name="dateOfBirth"
                  value={dateOfBirth}
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
              <div className="w-full mb-5">
                <label className="text-gray-500">
                  Last blood donation data
                </label>
                <input
                  type="date"
                  onChange={setForm}
                  name="lastDonation"
                  value={lastDonation}
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
            </form>
            <AppButton onClick={() => navigation.next()}>Next</AppButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Basic
