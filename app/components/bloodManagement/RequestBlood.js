import RequestBloodLottie from "@components/Lotties/RequestBloodLottie"
import AppLink from "@components/others/AppLink"

export default function RequestBlood() {
  return (
    <section>
      <div className="-mt-2 z-1">
        <RequestBloodLottie />
      </div>
      <p className="mt-1 z-10 text-center text-xl font-bold">
        Oops! No Donor Found. Request Blood From{" "}
        <AppLink href="/request-blood">
          <span className="underline text-error">Here!</span>
        </AppLink>
      </p>
    </section>
  )
}
