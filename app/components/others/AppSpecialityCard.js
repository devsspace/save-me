import Image from "next/image"

export default function AppSpecialityCard({ speciality }) {
  return (
    <div className="flex flex-col w-52 md:w-60 items-center shadow-md rounded-md bg-light dark:bg-gray-600 py-3 px-10 cursor-pointer">
      <Image src={speciality.photoURL} width={50} height={50} />
      <p className="font-bold mt-5 text-xs md:text-base">{speciality.name}</p>
    </div>
  )
}
