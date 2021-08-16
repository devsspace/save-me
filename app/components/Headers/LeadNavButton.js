import { MdDashboard } from "react-icons/md"

export default function LeadNavButton({ span1Text, span2Text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative flex flex-col items-center cursor-pointer group"
    >
      <span className="absolute bottom-6 right-0 h-4 w-4 bg-primary text-center rounded-full text-white font-bold md:bottom-9 md:left-9 group-hover:text-primary group-hover:bg-white dark:text-primary dark:bg-white dark:group-hover:bg-primary dark:group-hover:text-white">
        {span1Text}
      </span>
      <MdDashboard className="w-8 h-8  mb-1 text-white group-hover:text-primary dark:text-primary dark:group-hover:text-white" />
      <button className="hidden  md:inline text-white font-bold dark:group-hover:text-white">
        {span2Text}
      </button>
    </div>
  )
}
