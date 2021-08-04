import Image from "next/image"

export default function DashLogo() {
  return (
    <>
      <Image
        src="https://i.ibb.co/DLGXhqT/moja2.png"
        width={35}
        height={35}
        objectFit="contain"
        className="cursor-pointer"
        alt="Save Me Logo"
      />
      <div className="logo_name ml-1">Save Me</div>
    </>
  )
}
