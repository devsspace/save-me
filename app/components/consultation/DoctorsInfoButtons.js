import AppButton from "@components/others/AppButton"

export default function DoctorsInfoButtons({ router, setModalOpen, doctorId }) {
  return (
    <div className="flex justify-center my-32">
      <AppButton
        onClick={() => router.push(`/payment-process?doctor=${doctorId}`)}
      >
        Consult now
      </AppButton>

      <AppButton
        className="ml-5 justify-center"
        onClick={() => setModalOpen(true)}
      >
        Book
      </AppButton>
    </div>
  )
}
