import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"

export default function useRatingClient(rating = 0) {
  let ratingIcons
  if (rating === 5)
    ratingIcons = [BsStarFill, BsStarFill, BsStarFill, BsStarFill, BsStarFill]
  else if (rating > 4 && rating < 5)
    ratingIcons = [BsStarFill, BsStarFill, BsStarFill, BsStarFill, BsStarHalf]
  else if (rating === 4)
    ratingIcons = [BsStarFill, BsStarFill, BsStarFill, BsStarFill, BsStar]
  else if (rating > 3 && rating < 4)
    ratingIcons = [BsStarFill, BsStarFill, BsStarFill, BsStarHalf, BsStar]
  else if (rating === 3)
    ratingIcons = [BsStarFill, BsStarFill, BsStarFill, BsStar, BsStar]
  else if (rating > 2 && rating < 3)
    ratingIcons = [BsStarFill, BsStarFill, BsStarHalf, BsStar, BsStar]
  else if (rating === 2)
    ratingIcons = [BsStarFill, BsStarFill, BsStar, BsStar, BsStar]
  else if (rating > 1 && rating < 2)
    ratingIcons = [BsStarFill, BsStarHalf, BsStar, BsStar, BsStar]
  else if (rating === 1)
    ratingIcons = [BsStarFill, BsStar, BsStar, BsStar, BsStar]
  else if (rating > 0 && rating < 1)
    ratingIcons = [BsStarHalf, BsStar, BsStar, BsStar, BsStar]
  else if (rating === 0) ratingIcons = [BsStar, BsStar, BsStar, BsStar, BsStar]

  return { ratingIcons }
}
