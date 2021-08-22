import PaymentForm from "@components/PaymentForm/PaymentForm"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"


const stripePromise = loadStripe("pk_test_51Ie5hbAmn5naFKLhBKxWwIXlTaGjoeHtgxkkGUxasLm1sAmqsAauDidchexCeExedxDrrgco5C4mfiSCMn0iFn3L00PbxUrm5N")
const PaymentProcess = () => {
    return (
        <>
            <h1 className="text-center text-3xl pt-10 pb-10">Please Make Your Payment</h1>
            <Elements stripe={stripePromise} >
                <PaymentForm />
            </Elements>
        </>



    )
}

export default PaymentProcess