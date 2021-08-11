import {
  FaFacebook,
  FaHeart,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa"

export default function Footer() {
  return (
    <section className="px-5 md:px-60 py-5 relative overflow-hidden">
      <div>
        <p className="text-3xl text-center font-bold">Save Me</p>
        <p className="mt-2 text-center text-sm">
          "Medicines Cure Diseases, But Only Doctors Can Cure Patients <br />
          Respect Them" - Carl Jung
        </p>
      </div>

      <section className="mt-10 flex justify-center items-center flex-wrap gap-10 text-xs">
        <div>
          <p className="text-sm font-bold">Services</p>
          <p>Book Appointment</p>
          <p>Video Consultation</p>
          <p>Online COVID-19 Care</p>
        </div>
        <div className="hidden sm:block">
          <p className="text-sm font-bold">Products</p>
          <p>Ongoing Offers</p>
          <p>Search By Category</p>
          <p>Most Popular Products</p>
        </div>
        <div>
          <p className="text-sm font-bold">Contact</p>
          <p>WhatsApp</p>
          <p>+88019507489</p>
          <p>bidaiPitibi@mail.com</p>
        </div>
      </section>

      <section className="mt-5 flex justify-center items-center flex-wrap gap-3 text-xs">
        <FaFacebook className="w-6 h-6 text-[#4267B2]" />
        <FaTwitterSquare className="w-6 h-6 text-[#1DA1F2]" />
        <FaLinkedin className="w-6 h-6 text-[#0077b5]" />
      </section>
      <section className="mt-5 flex flex-col justify-center items-center flex-wrap gap-3 text-xs">
        <div className="text-center">
          <p>&copy; 2021 All Rights Reserved By Save Me</p>
          <p>Mirpur, Dhaka 1216, Hoza Street, Bangladesh</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            velit.
          </p>
        </div>

        <div className="flex flex-col text-center sm:text-left space-y-3 sm:space-y-0 sm:flex-row gap-3">
          <div className="space-y-3">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="space-y-3">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <p className="text-sm font-bold">
          Let's Appreciate Every Doctor Out There Who Saves Us{" "}
          <FaHeart className="inline text-red-500" />
        </p>
      </section>
      <div className="w-80 h-80 rounded-full border-[60px] border-primary absolute -right-40 -top-40" />
      <div className="w-80 h-80 rounded-full border-[60px] border-gray-600 absolute -left-40 -bottom-44" />
    </section>
  )
}
