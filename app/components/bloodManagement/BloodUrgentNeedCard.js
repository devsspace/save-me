import AppHeader from "@components/Headers/AppHeader"
import AppButtonV2 from "@components/others/AppButtonV2"
import AppContainer from "@components/others/AppContainer"
import AppLink from "@components/others/AppLink"
import { BsFillPeopleFill } from "react-icons/bs"

export default function ConsultationHeader() {
  return (
    <AppContainer>
      <AppHeader
        imagePosition="left"
        title={<p className="text-3xl">HealthCare - Anytime, Anywhere!</p>}
        others={
          <div className="flex justify-center md:justify-start space-x-3">
            <AppLink href="/doctors">
              <AppButtonV2
                Icon={BsFillPeopleFill}
                textPrimary="Appointment"
                textSecondary="Make An"
              />
            </AppLink>
          </div>
        }
        text="We are on a mission to change how
      healthcare is delivered in Bangladesh. We know how daunting getting
      access to the right care can be which is why we focus on turning a
      doctor visit into a delightful experience.Our goal is to make the
      process intuitive for our patients and provide care where ever you
      are – in person or at-home."
        imgURL="/images/videoCall.svg"
      />
    </AppContainer>
  )
}
