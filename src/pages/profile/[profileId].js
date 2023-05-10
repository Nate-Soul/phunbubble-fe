import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";

const UserProfile = () => {
  return (
    <>
      <Navbar/>
      <main className="grid grid-cols-12 min-h-screen">
        <LeftSideBar/>
        <div className="col-span-12 md:col-span-9 lg:col-span-7 px-10 py-8 bg-gray-50">
          <Profile/>
        </div>
        <RightSideBar/>
      </main>
    </>
  )
}

export default UserProfile
