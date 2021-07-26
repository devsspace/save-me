import AppButton from "@components/others/AppButton"
import React from "react"

const DonorInfo = () => (
  <>
    <div className="my-12">
      <div className="min-h-screen p-0 sm:p-12">
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 className="text-2xl font-bold mb-8">Basic Info</h1>
          <form>
            <div className="w-full mb-5">
              <label className="text-gray-500">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>
            <div className="w-full mb-5">
              <label className="text-gray-500">Mobile Number</label>
              <input
                type="number"
                name="mobile"
                placeholder="Enter mobile number"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>
            <div className="w-full mb-5">
              <label className="text-gray-500">Blood Group</label>
              <select
                name="select"
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
                name="select"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              >
                <option value="Select">Select</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
            <div className="w-full mb-5">
              <label className="text-gray-500">Date of birth</label>
              <input
                type="date"
                name="date"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>
            <div className="w-full mb-5">
              <label className="text-gray-500">Last donation date</label>
              <input
                type="date"
                name="donationdate"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>
            <div className="w-full mb-5">
              <label className="text-gray-500">National ID number</label>
              <input
                type="text"
                name="idnumber"
                placeholder="Enter id number"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <button
              id="button"
              type="button"
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-blue-400 hover:shadow-lg focus:outline-none"
            >
              Save
            </button>
            <AppButton />
          </form>
        </div>
      </div>
    </div>
  </>
)

export default DonorInfo
