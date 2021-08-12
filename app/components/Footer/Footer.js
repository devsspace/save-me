import FooterInfo from "@components/Footer/FooterInfo"
import FooterLinks from "@components/Footer/FooterLinks"
import FooterSocials from "@components/Footer/FooterSocials"

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

      <FooterLinks />
      <FooterSocials />
      <FooterInfo />

      <div className="hidden md:block w-80 h-80 rounded-full border-[60px] border-primary absolute -right-40 -top-40" />
      <div className="hidden md:block w-80 h-80 rounded-full border-[60px] border-gray-600 absolute -left-40 -bottom-44" />
    </section>
  )
}
