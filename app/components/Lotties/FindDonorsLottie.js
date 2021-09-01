import * as animationData from "@components/Lotties/FindDonors.json"
import Lottie from "react-lottie"

export default function FindDonorsLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <div className="container mx-auto">
      <Lottie options={defaultOptions} height={350} width={350} />
    </div>
  )
}
