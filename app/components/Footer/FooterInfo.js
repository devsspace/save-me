import { FaHeart } from "react-icons/fa"

export default function FooterInfo() {
  return (
    <section className="mt-3 flex flex-col justify-center items-center flex-wrap gap-3 text-xs">
      <div className="text-center">
        <p>&copy; 2021 All Rights Reserved By Save Me</p>
        <p>Mirpur, Dhaka 1216, Hoza Street, Bangladesh</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit.
        </p>
      </div>

      <div className="flex flex-col text-center sm:text-left space-y-3 sm:space-y-0 sm:flex-row gap-3">
        <div className="space-y-3">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="space-y-3">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it Lorem ipsum dolor sit amet.
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
