import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

export default function FooterSocials() {
  return (
    <section className="mt-8 flex justify-center items-center flex-wrap gap-3 text-xs">
      <FaFacebook className="w-8 h-8 text-[#4267B2] cursor-pointer" />
      <FaTwitterSquare className="w-8 h-8 text-[#1DA1F2] cursor-pointer" />
      <FaLinkedin className="w-8 h-8 text-[#0077b5] cursor-pointer" />
    </section>
  )
}
