import Image from "next/image"

export default function BrandLogo({ className, textClassName }) {
  return (
    <div className={`flex items-center flex-grow sm:flex-grow-0 ${className}`}>
      <Image
        src="https://i.ibb.co/DLGXhqT/moja2.png"
        width={40}
        height={40}
        objectFit="contain"
        className="cursor-pointer"
        alt="Brand Logo"
      />
      <p
        className={`hidden lg:block text-white font-bold px-2 ${textClassName}`}
      >
        Save Me
      </p>
    </div>
  )
}
