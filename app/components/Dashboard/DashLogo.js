import Image from "next/image"
import { useRouter } from "next/router"

export default function DashLogo() {
  const router = useRouter()

  return (
    <>
      <Image
        src="https://i.ibb.co/DLGXhqT/moja2.png"
        width={35}
        height={35}
        objectFit="contain"
        className="cursor-pointer"
        alt="Save Me Logo"
        onClick={() => router.push("/")}
      />
      <div className="logo_name ml-1" onClick={() => router.push("/")}>
        Save Me
      </div>
    </>
  )
}
