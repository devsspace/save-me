import * as animationData from "@components/Lotties/LoadingSpinner.json"
import Lottie from "react-lottie"

export default function LoadingSpinner() {
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
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  )
}
