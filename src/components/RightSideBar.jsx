import Image from "next/image";
import Avatar from "../assets/images/icons/43.-avatar.svg";
import Person1 from "../assets/images/profiles/person-1.jpg";
import Person2 from "../assets/images/profiles/person-2.jpg";
import Person3 from "../assets/images/profiles/person-3.jpg";
import Person4 from "../assets/images/profiles/me.png";


const RightSideBar = () => {
  return (
    <aside className="right-side-bar col-span-3 overflow-y-scroll hide-scrollbar sticky top-20 hidden lg:block">
      <div className="p-5">
        <div className="item-card shadow p-4 flex flex-col mb-4 text-sm">
          <h6 className="block text-xs text-gray-500 mb-4">Suggested for you</h6>
          <div className="item flex justify-between items-center my-5">
            <div className="info flex items-center gap-2">
              <Image src={Person1} alt="Name" className="object-cover w-6 h-6 rounded-full"/>
              <span>Jane Doe</span>
            </div>
            <div className="action flex items-center gap-2">
              <button className="py-1 px-2 rounded-3xl text-white bg-main-200 hover:bg-main-300">Follow</button>
              <button className="py-1 px-2 rounded-3xl text-white bg-secondary-100 hover:bg-secondary-200">Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item-card text-sm">
          <h6 className="block text-xs text-gray-500 mb-4">Online Friends</h6>
          <div className="item flex justify-between items-center mb-3">
            <figure className="info flex items-center gap-2 relative">
              <Image src={Person1} alt="Name" className="object-cover w-6 h-6 rounded-full"/>
              <span className="online-indicator w-2 h-2 rounded-full bg-green-500 left-5 top-px absolute"></span>
              <figcaption>
                <span className="text-black">Jane Doe</span>
              </figcaption> 
            </figure>
          </div>
          <div className="item flex justify-between items-center mb-3">
            <figure className="info flex items-center gap-2 relative">
              <Image src={Person2} alt="Name" className="object-cover w-6 h-6 rounded-full"/>
              <span className="online-indicator w-2 h-2 rounded-full bg-green-500 left-5 top-px absolute"></span>
              <figcaption>
                <span className="text-black">Grace Doe</span>
              </figcaption>
            </figure>
          </div>
          <div className="item flex justify-between items-center mb-3">
            <figure className="info flex items-center gap-2 relative">
              <Image src={Person3} alt="Name" className="object-cover w-6 h-6 rounded-full"/>
              <span className="online-indicator w-2 h-2 rounded-full bg-green-500 left-5 top-px absolute"></span>
              <figcaption>
                <span className="text-black">Dylan Doe</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="item-card text-sm">
          <h6 className="block text-xs text-gray-500 mb-4">Latest Activities</h6>
          <div className="item flex justify-between items-center mb-3">
            <div className="info flex items-center gap-2">
              <Image src={Person1} alt="Name" className="object-cover w-6 h-6 rounded-full"/>
              <p className="text-gray-600">
                <span className="text-black">Jane Doe</span> changed their profile picture
              </p>
            </div>
            <span className="text-xs">1 min ago</span>
          </div>
          <div className="item flex justify-between items-center mb-3">
            <div className="info flex items-center gap-2">
              <Image src={Person2} alt="Name" className="object-cover w-6 h-6 rounded-full"/>
              <p className="text-gray-600">
                <span className="text-black">Grace Doe</span> updated her profile picture
              </p>
            </div>
            <span className="text-xs">1 min ago</span>
          </div>
          <div className="item flex justify-between items-center mb-3">
            <div className="info flex items-center gap-2">
              <Image src={Person3} alt="Name" className="object-cover w-6 h-6 rounded-full"/>
              <p className="text-gray-600">
                <span className="text-black">Dylan Doe</span> commented on your post
              </p>
            </div>
            <span className="text-xs">5 hrs ago</span>
          </div>
          <div className="item flex justify-between items-center mb-3">
            <div className="info flex items-center gap-2">
              <Image src={Person4} alt="Name" className="object-cover w-6 h-6 rounded-full"/>
              <p className="text-gray-600">
                <span className="text-black">You</span> dropped a new post
              </p>
            </div>
            <span className="text-xs leading-tight">2 secs ago</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default RightSideBar
