import AppLink from "@components/others/AppLink"

export default function FooterLinks() {
  return (
    <section className="mt-10 flex justify-center items-center flex-wrap gap-10 text-xs">
      <div>
        <p className="text-sm font-bold">Services</p>
        <AppLink href="/coming-soon">
          <p className="mt-1 underline">Book Appointment</p>
        </AppLink>
        <AppLink href="/coming-soon">
          <p className="mt-1 underline">Video Consultation</p>
        </AppLink>
        <AppLink href="/coming-soon">
          <p className="mt-1 underline">Online COVID-19 Care</p>
        </AppLink>
      </div>
      <div className="hidden sm:block">
        <p className="text-sm font-bold">Products</p>
        <AppLink href="/coming-soon">
          <p className="mt-1 underline">Ongoing Offers</p>
        </AppLink>
        <AppLink href="/coming-soon">
          <p className="mt-1 underline">Search By Category</p>
        </AppLink>
        <AppLink href="/coming-soon">
          <p className="mt-1 underline">Most Popular Products</p>
        </AppLink>
      </div>
      <div>
        <p className="text-sm font-bold">Contact</p>
        <AppLink href="/coming-soon">
          <p className="mt-1 underline">WhatsApp</p>
        </AppLink>
        <AppLink href="/coming-soon">
          <p className="mt-1 underline">+88015897431</p>
        </AppLink>
        <AppLink href="/coming-soon">
          <p className="mt-1 underline">bidaipitibi@mail.com</p>
        </AppLink>
      </div>
    </section>
  )
}
