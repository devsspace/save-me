import * as animationData from "@components/Lotties/RequestBlood.json"
import Lottie from "react-lottie"

export default function RequestBloodLottie() {
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
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  )
}
