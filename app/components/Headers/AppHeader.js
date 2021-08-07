import Image from "next/image"

export default function AppHeader({
  title = "",
  text = "",
  imgURL = "",
  width = 400,
  height = 300,
  others = "",
}) {
  return (
    <section>
      <div className="flex flex-col p-4 md:py-0 md:flex-row justify-center items-center container mx-auto space-x-0 md:space-x-9">
        <div className="space-y-4 md:w-1/2">
          <p
            className="text-2xl text-center md:text-left lg:text-5xl font-extrabold"
            suppressHydrationWarning
          >
            {title}
          </p>
          <p className="text-center md:text-left">{text}</p>

          {others}
        </div>

        <div>
          <Image
            src={imgURL}
            width={width}
            height={height}
            objectFit="contain"
            alt="Get Notified About Great Articles!!"
          />
        </div>
      </div>
    </section>
  )
}
