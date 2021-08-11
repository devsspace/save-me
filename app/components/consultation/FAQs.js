import AppContainer from "@components/others/AppContainer"
import AppDisclosure from "@components/others/AppDisclosure"
import Image from "next/image"
import { BsFillHeartFill } from "react-icons/bs"

export default function FAQs() {
  return (
    <AppContainer className="mb-0">
      <p className="text-xl font-bold text-center">
        Frequently Asked Questions
      </p>
      <p className="text-center text-xs md:text-base p-0 md:px-5 lg:px-52">
        A Frequently Asked Questions (FAQ) Forum is Often Used In Articles,
        Websites, Email, Lists And Online Forums Where Common Questions Tend To
        Occur <BsFillHeartFill className="inline text-red-500" />!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <Image src="/images/FAQs.svg" height={400} width={400} />
        <div className="space-y-2">
          <AppDisclosure
            question="What Does Telemedicine Mean?"
            answer="Remote Medical Services, Diagnosing And Treating Patients Without  Consulting Them in-person, is Called Telemedicine. Telemedicine, also called Online Doctor Visits. It is the remote diagnosis & treatment of patients by means of telecommunication technology."
          />
          <AppDisclosure
            question="I’m a Doctor. How Can I Register Here?"
            answer=" If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked."
          />
          <AppDisclosure
            question="What is The Goal Of  “Save Me” And How It Can Help?"
            answer=" If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked."
          />
          <AppDisclosure
            question="Is This Project Open Sourced? Which Stack is Used?"
            answer=" If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked."
          />
          <AppDisclosure
            question="What is telemedicine Used For? How to take Benefits?"
            answer=" If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked."
          />
        </div>
      </div>
    </AppContainer>
  )
}
