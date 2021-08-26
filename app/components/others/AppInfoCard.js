import useLineClamp from "@hooks/useLineClamp"
import useRatingClient from "@hooks/useRatingClient"
import { AiOutlineArrowRight } from "react-icons/ai"

export default function AppInfoCard({ data, className }) {
  const {
    firstName,
    lastName,
    name,
    isOnline,
    profilePic,
    bio,
    specializations = [],
    rating = 4.5,
    conversations,
    communication = [{ cost: 0 }],
  } = data
  // console.log(data)
  const specializationsInString = specializations.join(", ")
  const { ratingIcons } = useRatingClient(rating)
  return (
    <div
      className={`rounded-md overflow-hidden shadow-md relative bg-light dark:bg-gray-600 cursor-pointer ${className}`}
    >
      <img
        className="w-full h-32 sm:h-48 w-full object-cover"
        src={profilePic}
        alt=""
      />

      <div className="m-3">
        <p className="text-xs">{bio}</p>
        <p className="font-bold">
          Dr. {firstName ? `${firstName} ${lastName}` : name}
        </p>

        <p className="text-xs">{useLineClamp(specializationsInString)}</p>

        <div className="mt-1 text-sm flex items-center gap-0.5 text-yellow-400">
          {ratingIcons.map((RatingIcon) => (
            <RatingIcon key={Math.random()} />
          ))}
          <p className="font-bold ml-1">{rating}</p>
        </div>
        <p className="text-xs mt-1">({conversations} Conversation)</p>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <p className="text-xl font-bold">৳ {communication[0].cost}</p>
            <p className="text-xs">Per Consultation</p>
          </div>
          <div className="mb-0.5">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>

      {isOnline && (
        <div className="backdrop-filter backdrop-blur-md p-2 text-xs uppercase font-bold rounded-md absolute top-0 right-0 mr-2 mt-2 flex items-center gap-1">
          <p className="w-3 h-3 rounded-full bg-green-400" />
          <span className="text-light">Online</span>
        </div>
      )}
    </div>
  )
}
