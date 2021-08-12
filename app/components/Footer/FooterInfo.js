import { FaHeart } from "react-icons/fa"

export default function FooterInfo() {
  return (
    <section className="mt-3 flex flex-col justify-center items-center flex-wrap gap-3 text-xs">
      <div className="text-center">
        <p>&copy; 2021 All Rights Reserved By Save Me</p>
        <p>Mirpur, Dhaka 1216, Hoza Street, Bangladesh</p>
        <p>"Save Me" is a Open Source WebApp Providing Medical Services</p>
      </div>

      <div className="flex flex-col text-center sm:text-left space-y-3 sm:space-y-0 sm:flex-row gap-3">
        <div className="space-y-3">
          <p>
            Our Goal is To Create & Maintain an Open Source Blood Management
            System which connects thousands of blood donors & making Profitable
            Growth by Online Pharmacy (E-Commerce) & Other Facilities.
          </p>
          <p>
            We Provide Medical Services Like Video Consultation, Online COVID_19
            Care & Blood Management System. You Can Contact Us Through WhatsApp
            or Our Email Provided On About Section. Thank You!
          </p>
        </div>
        <div className="space-y-3">
          <p>
            We're a Team of 5 Passionate Developers Working Hard Maintaining
            This Project. Our Work "SAVE ME" is fully Open Sourced & You can
            checkout source codes on{" "}
            <a
              target="_blank"
              href="https://github.com/devsspace/save-me"
              rel="noreferrer"
              className="underline"
            >
              github
            </a>
            . We hope you'll check it out.
          </p>
          <p>
            Appointments with doctors, expanding customer reach, establishing
            trust and creating awesome convenient user experience for doctors,
            blood donors & ecommerce customers.
          </p>
        </div>
      </div>

      <p className="text-xs font-bold md:text-sm">
        Appreciate Every Doctor Out There Who Saves Us{" "}
        <FaHeart className="inline text-red-500" />
      </p>
    </section>
  )
}
