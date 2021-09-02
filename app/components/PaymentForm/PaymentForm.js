import { errorAlert } from "@components/others/Alerts"
import AppButton from "@components/others/AppButton"
import FormInput from "@components/others/FormInput"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { addPayment, getDoctor } from "app/api/index"
import { useUserContext } from "app/contexts/UserContext"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { AiFillCreditCard } from "react-icons/ai"



const CardField = ({ onChange }) => (
  <div className="placeholder-gray-400 mt-2 rounded-md text-dark dark:text-light bg-white dark:bg-gray-600 shadow-md px-2 py-3 focus:ring-2 focus:ring-primary border-none outline-none">
    <CardElement onChange={onChange} />
  </div>
)

const SubmitButton = ({ processing, error, children, disabled }) => (
  <button type="submit" disabled={processing || disabled}>
    {processing ? "Processing..." : children}
  </button>
)

const ErrorMessage = ({ children }) => (
  <div role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
)

const ResetButton = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    <svg width="32px" height="32px" viewBox="0 0 32 32">
      <path
        fill="#FFF"
        d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
      />
    </svg>
  </button>
)

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [cardComplete, setCardComplete] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [billingDetails, setBillingDetails] = useState({
    email: "",
    phone: "",
    name: "",
    doctor: "",
    fee: ""

  })
  const [specificDoc, setSpecificDoc] = useState({})


  const { currentUser } = useUserContext()
  const router = useRouter()
  const { doctor } = router.query


  useEffect(() => {
    if (currentUser?._id)
      setBillingDetails({
        email: currentUser.email,
        phone: currentUser.phoneNumber,
        name: currentUser.name,
        doctor: specificDoc.name,
        fee: specificDoc.consultationFee,
      })
      else {
        router.replace(`/user/login?from=${router.asPath}`)
      }
      console.log(currentUser)
  }, [currentUser, router, specificDoc])

  useEffect(() => {
    const getDoc = async () => {

      try {
        const { data } = await getDoctor(doctor)
        setSpecificDoc(data)
        // setBillingDetails({
        //   ...billingDetails,
        //   doctor: data.name,
        //   fee: data.consultationFee,
        // })
        // console.log(data)
      } catch (err) {

        console.log(err)

      }

    }
    getDoc()
  }, [])

  // console.log("PaymentMethod", paymentMethod)

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(billingDetails.doctor)
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    if (error) {
      elements.getElement("card").focus()
      return
    }

    if (cardComplete) {
      setProcessing(true)
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: { name: billingDetails.name, phone: billingDetails.phone, email: billingDetails.email }
    })

    setProcessing(false)

    if (payload.error) {
      setError(payload.error)
    } else {

      const serviceData = {


      }


      // setPaymentMethod(serviceData)
      try {
        const paymentInfo = {
          paymentInfo: payload.paymentMethod,
          fee: billingDetails.fee,
          doctorId: specificDoc._id,
          patientId: currentUser._id,
        }
        console.log(paymentInfo)
        const { data } = await addPayment(paymentInfo)
        if (data._id) {
          router.push(`/doctors/${router.query.doctor}/waitingList`)
        } else {
          errorAlert("Something Went Wrong")
        }
      } catch (e) {
        errorAlert(e.message)
      }

    }
  }

  const reset = () => {
    setError(null)
    setProcessing(false)
    setPaymentMethod(null)
    setBillingDetails({
      email: "",
      phone: "",
      name: "",
      doctor: "",
      fee: ""

    })
  }

  return paymentMethod ? (
    <div>
      <div role="alert">Payment successful</div>
      <div>
        Thanks for trying Stripe Elements. No money was charged, but we
        generated a PaymentMethod: {paymentMethod.id}
      </div>
      <ResetButton onClick={reset} />
    </div>
  ) : (
    <div className="bg-gray-200 dark:bg-gray-900 shadow-xl p-5 pb-12 px-12 mt-20">
      <div className="w-full pt-1 pb-5">
        <div className="bg-primary text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mdi mdi-credit-card-outline text-3xl"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        </div>
      </div>
      <h1 className="text-xl text-center sm:text-2xl font-bold mb-5">
        Please Make Your Payment{" "}
        <span className="block">Before Continuing!</span>
      </h1>

      <div className="mb-3 flex -mx-2">
        <div className="px-2">
          <label for="type1" className="flex items-center cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-primary"
              name="type"
              id="type1"
              checked
            />
            <img
              src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
              className="h-8 ml-3"
              alt=""
            />
          </label>
        </div>
        <div className="px-2">
          <label for="type2" className="flex items-center cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-primary"
              name="type"
              id="type2"
            />
            <img
              src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
              className="h-8 ml-3"
              alt=""
            />
          </label>
        </div>
      </div>

      <form
        className="flex justify-center flex-col space-y-2 "
        onSubmit={handleSubmit}
      >
        <FormInput
          id="name"
          type="text"
          placeholder="Your Name"
          required
          autoComplete="name"
          value={billingDetails.name}
          readOnly
        />

        <FormInput
          id="email"
          type="email"
          placeholder="Your Email"
          required
          autoComplete="email"
          value={billingDetails.email}
          readOnly
        />
        <FormInput
          id="phone"
          type="tel"
          placeholder="Your Phone No."
          required
          autoComplete="tel"
          value={billingDetails.phone}
          readOnly
        />

        <FormInput
          type="tel"
          placeholder="Doctor's Name"
          required
          value={billingDetails.doctor}
          readOnly
        />

        <FormInput
          type="text"
          required
          placeholder="Consultation Fee"
          value={billingDetails.fee}
          readOnly
        />
        <fieldset>
          <CardField
            onChange={(e) => {
              setError(e.error)
              setCardComplete(e.complete)
            }}
          />
        </fieldset>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <SubmitButton processing={processing} error={error} disabled={!stripe}>
          <AppButton
            className="flex mt-2 justify-center"
            Icon={AiFillCreditCard}
          >
            Pay Now
          </AppButton>
        </SubmitButton>
      </form>
    </div>
  )
}

export default PaymentForm
