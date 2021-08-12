import Image from "next/image"
import { FaHeart } from "react-icons/fa"

export default function ComingSoonPage() {
  return (
    <div className="wrapper">
      <div className="flex justify-center mb-8">
        <Image
          src="https://i.ibb.co/5n478qb/moja.gif"
          width={200}
          height={200}
          alt="dhinka chika"
        />
      </div>
      <h1 className="coming-soon text-gray-700">
        coming soon<span className="dot">.</span>
      </h1>
      <p className="text-center font-bold text-gray-500 mt-3 animate-pulse">
        Thanks For Your Patience <FaHeart className="inline text-red-500" />
      </p>
    </div>
  )
}
