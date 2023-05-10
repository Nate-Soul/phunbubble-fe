import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/context/authContext";
import Avatar from "../assets/images/icons/43.-avatar.svg";
import MarketPlace from "../assets/images/icons/39.-market.svg";
import VideoIcon from "../assets/images/icons/Camcorder Pro.svg";
import Gallery from "../assets/images/icons/Stack of Photos.svg";
import Watch from "../assets/images/icons/Clapperboard.svg";
import FundRaiser from "../assets/images/icons/17.-receiving money.svg";
import HourGlass from "../assets/images/icons/hourglass.png";
import FriendsIcon from "../assets/images/icons/icons8-user-groups-96.png";
import Bubbles from "../assets/images/icons/icons8-speech-bubbles-64.png";
import MessagesIcon from "../assets/images/icons/icons8-messages.svg";
import EventsIcon from "../assets/images/icons/desk-calendar-3d-icon_webp.webp";
import GamingIcon from "../assets/images/icons/joystick.png";

const LeftSideBar = () => {

    const {currentUser} = useContext(AuthContext);

  return (
    <aside className="left-side-bar md:col-span-3 lg:col-span-2 sticky top-20 overflow-y-scroll hide-scrollbar hidden md:block">
        <div className="p-5">
            <ul className="list-group text-sm">
                <li><span className="text-gray-500 text-xs">Shortcuts</span></li>
                <li>
                    <Link href="/profile/2" className="list-group-item">
                        <Image src={currentUser.length ? currentUser.profilePic : Avatar} className="w-6 h-6 rounded-full object-cover" alt={currentUser.length ? currentUser.name : "Avatar"}/>
                        <span>My profile</span>
                    </Link>
                </li>
                <li>
                    <Link href="/friends" className="list-group-item">
                        <Image src={FriendsIcon} className="w-6 h-6 rounded-full object-cover" alt="friends icon"/>
                        <span>Friends</span>
                    </Link>
                </li>
                <li>
                    <Link className="list-group-item" href="/bubbles">
                        <Image src={Bubbles} className="w-6 h-6 rounded-full object-cover" alt="chat bubbles icon"/>
                        <span>Bubbles</span>
                    </Link>
                </li>
                <li>
                    <Link href="/messages" className="list-group-item">
                        <Image src={MessagesIcon} className="w-6 h-6 rounded-full object-cover" alt="chat bubble icon"/>
                        <span>Messages</span>
                    </Link>
                </li>
            </ul>
            <hr className="border-0 bg-gray-100 h-0.5px my-5"/>
            <ul className="list-group text-sm">
                <li><span className="text-gray-500 text-xs">Coming soon</span></li>
                <li className="list-group-item">
                    <Image src={EventsIcon} className="w-6 h-6 rounded-full object-cover" alt="events icon"/>
                    <span>Events</span>
                </li>
                <li className="list-group-item">
                    <Image src={GamingIcon} className="w-6 h-6 rounded-full object-cover" alt="gaming icon"/>
                    <span>Gaming</span>
                </li>
                <li className="list-group-item">
                    <Image src={Gallery} className="w-6 h-6 rounded-full object-cover" alt="gallery icon"/>
                    <span>Gallery</span>
                </li>
                <li className="list-group-item">
                    <Image src={VideoIcon} className="w-6 h-6 rounded-full object-cover" alt="video icon"/>
                    <span>Videos</span>
                </li>
            </ul>
            <hr className="border-0 bg-gray-100 h-0.5px my-5"/>
            <ul className="list-group text-sm">
                <li><span className="text-gray-500 text-xs">Others</span></li>
                <li className="list-group-item">
                    <Image src={MarketPlace} className="w-6 h-6 rounded-full object-cover" alt="marketplace icon"/>
                    <span>Marketplace</span>
                </li>
                <li className="list-group-item">
                    <Image src={Watch} className="w-6 h-6 rounded-full object-cover" alt="video player icon"/>
                    <span>Watch</span>
                </li>
                <li className="list-group-item">
                    <Image src={HourGlass} className="w-6 h-6 rounded-full object-cover" alt="memories icon"/>
                    <span>Memories</span>
                </li>
                <li className="list-group-item">
                    <Image src={FundRaiser} className="w-6 h-6 rounded-full object-cover" alt="fund raiser icon"/>
                    <span>Fund Raiser</span>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default LeftSideBar
