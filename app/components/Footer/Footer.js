import React from "react"

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
          {/* <!-- Col-1 --> */}
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            {/* <!-- Col Title --> */}
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Services
            </div>

            {/* <!-- Links --> */}
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Doctors consultant(online)
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Digital prescription
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Blood Bank
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Online Pharmacy
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Home Delivery
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              64 District Services
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              24/7 Hotline Helop
            </a>
          </div>

          {/* <!-- Col-2 --> */}
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            {/* <!-- Col Title --> */}
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Products
            </div>

            {/* <!-- Links --> */}
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Medicine
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Vaccine
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Surgical Equipment
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Herbal Products
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Medical Instruments
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Therapy Instruments
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Adding New Utilities
            </a>
          </div>

          {/* <!-- Col-3 --> */}
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            {/* <!-- Col Title --> */}
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Contact
            </div>

            {/* <!-- Links --> */}
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              +880123654789
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              saveme@saveme.com
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              24/7 Hotline
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Contact Number 2
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Contact Number 3
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Contact Number 4
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Contact Number 5
            </a>
          </div>

          {/* <!-- Col-3 --> */}
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            {/* <!-- Col Title --> */}
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Community
            </div>

            {/* <!-- Links --> */}
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              GitHub
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Discord
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Twitter
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* <!-- Copyright Bar --> */}
        <div className="pt-2">
          <div
            className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl"
          >
            <div className="mt-2 mx-auto">
              © Copyright {new Date().getFullYear()} All Rights Reserved
            </div>

            {/* <!-- Required Unicons (if you want) --> */}
            {/* <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-facebook-f"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-twitter-alt"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-youtube"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-linkedin"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-instagram"></i>
                </a>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
