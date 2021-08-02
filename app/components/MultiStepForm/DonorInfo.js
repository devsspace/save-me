import React from "react"

const DonorInfo = () => {
  return (
    <div className="mx-auto max-w-6xl p-12">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-1/2 max-w-md flex flex-col justify-center">
          <img
            className=""
            src="https://res.cloudinary.com/dxvzhnyuo/image/upload/v1627829528/blood-donor-removebg-preview_snnwvx.png"
            alt=""
          />
        </div>
        <div className="md:w-1/2 flex justify-start mt-5 md:justify-end w-full md:w-1/2 ">
          <div className="shadow-md flex-auto max-w-sm p-10 pb-20 w-96">
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Full Name
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                <input
                  placeholder="Jhon"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Blood Group
              </div>
              <div className="my-2 bg-white p-1 flex rounded">
                <select
                  name="bloodGroup"
                  className="pt-2 pb-1 block w-full bg-transparent"
                >
                  <option value="Select">Select blood group</option>
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
            </div>
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Mobile Number
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                {" "}
                <input
                  placeholder="+880"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Current Location
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                {" "}
                <input
                  placeholder="Dhaka"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="mt-6 relative">
              <div
                className="shadow-md font-medium py-2 px-4 text-white
                  cursor-pointer bg-primary hover:bg-green-400 rounded text-lg tr-mt  absolute text-center w-full"
              >
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonorInfo
