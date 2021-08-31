import withAuth from "@components/auth/withAuth"
import Notifications from "@components/video/Notifications"
import Sidebar from "@components/video/Sidebar"
import VideoPlayer from "@components/video/VideoPlayer"
import { VideoContextProvider } from "app/contexts/videoContext"

const Call = () => {
  return (
    <VideoContextProvider>
      <div>
        <VideoPlayer />

        <Sidebar>
          <Notifications />
        </Sidebar>
        {/* <Prescription /> */}
      </div>
    </VideoContextProvider>
  )
}

export default withAuth(Call)
