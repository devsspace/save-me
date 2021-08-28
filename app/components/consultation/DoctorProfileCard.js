export default function DoctorProfileCard({
  name,
  degreesInString,
  specialityInString,
  active,
  bmdcNumber,
  totalExperienceYears,
  consultationFee,
  profilePic,
}) {
  return (
    <section className="w-full md:w-3/12 md:mx-2">
      <div className="bg-white p-3 border-t-4 border-green-400">
        <div className="">
          <img
            className="h-28 w-28 mx-auto rounded-full"
            src={
              profilePic ||
              "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRvY3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
            alt=""
          />
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          Dr. {name}
        </h1>
        <h3 className="text-gray-600 font-lg text-semibold leading-6">
          {degreesInString || "MS(medicine), FCPS, MBBS"}
        </h3>
        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
          {specialityInString || "Surgery Neurology"}
        </p>
        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
          <li className="flex items-center py-3">
            <span>Status</span>
            <span
              className={`ml-auto px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                !active
                  ? "bg-green-300 text-green-800"
                  : "bg-red-300 text-red-800"
              }`}
            >
              {!active ? "Active" : "Inactive"}
            </span>
            {/* <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span> */}
          </li>
          <li className="flex items-center py-3">
            <span>BMDC Number</span>
            <span className="ml-auto">{bmdcNumber || "A01010101"}</span>
          </li>
          <li className="flex items-center py-3">
            <span>Total Experience</span>
            <span className="ml-auto">
              {totalExperienceYears || "5+ years"} Years
            </span>
          </li>
          <li className="flex items-center py-3">
            <span>Consultaion Fee</span>
            <span className="ml-auto">৳ {consultationFee}</span>
          </li>
          {/* <li className="flex items-center py-3">
                    <span>Rating</span>

                    <span className="ml-auto">
                      &#11088;&#11088;&#11088;&#11088;
                    </span>
                  </li> */}
        </ul>
      </div>
    </section>
  )
}
