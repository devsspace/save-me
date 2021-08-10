import { BsStarFill } from "react-icons/bs"
import useRatingClient from "../../app/hooks/useRatingClient"

describe("useRatingClient", () => {
  it("returns Icon Components based on the 'rating' parameter", () => {
    expect(useRatingClient(5)).toEqual({
      ratingIcons: [BsStarFill, BsStarFill, BsStarFill, BsStarFill, BsStarFill],
    })
  })
})
