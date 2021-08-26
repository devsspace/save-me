import PaymentForm from "@components/PaymentForm/PaymentForm"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
  "pk_test_51Ie5hbAmn5naFKLhBKxWwIXlTaGjoeHtgxkkGUxasLm1sAmqsAauDidchexCeExedxDrrgco5C4mfiSCMn0iFn3L00PbxUrm5N"
)
const PaymentProcess = () => {
  return (
    <section>
      <div className="pt-10 pb-10 flex justify-center items-center">
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </div>
    </section>
  )
}

export default PaymentProcess
