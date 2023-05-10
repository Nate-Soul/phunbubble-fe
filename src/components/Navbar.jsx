import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Avatar from "../assets/images/icons/43.-avatar.svg";
import { DarkModeContext } from "@/context/darkModeContext";
import { AuthContext } from "@/context/authContext";

const Navbar = () => {

  const {darkMode, toggleThemeMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);
  const [userMenu, setuserMenu] = useState(false);
  
  const toggleUserMenu = () => {
    setuserMenu(!userMenu);
  };

  return (
    <nav className="shadow flex items-center justify-between text-sm h-16 px-8 sticky top-0 bg-white dark:bg-gray-900 z-40 max-w-full">
      <Link href="/">
        <span className="font-bold text-xl text-secondary hover:text-secondary-100">Phunbubble</span>
      </Link>
      <form className="flex items-center md:border border-gray-200 p-1 px-3 rounded-3xl hover:border-secondary-100">
        <span className="bi bi-search"></span>
        <input type="search" name="search" id="search" placeholder="Search..." className="w-0 md:w-40 lg:w-96 outline-none p-1 border-0"/>
      </form>
      <ul className="flex items-center gap-6">
        <li className="hover:text-secondary-200 cursor-pointer">
          <Link href="/">
            <span className="bi bi-house"></span>
          </Link>
        </li>
        <li className="hover:text-secondary-200 cursor-pointer">
          {darkMode ? (
            <span className="bi bi-sun" onClick={toggleThemeMode}></span>
          ) : (
            <span className="bi bi-moon-stars" onClick={toggleThemeMode}></span>
          )}
        </li>
        <li className="hover:text-secondary-200 cursor-pointer">
          <span className="bi bi-envelope"></span>
        </li>
        <li className="hover:text-secondary-200 cursor-pointer">
          <span className="bi bi-bell"></span>
        </li>
        <li className="relative">
            <Image src={currentUser.length ? currentUser.profilePic : Avatar} className="h-6 w-6 rounded-full object-cover cursor-pointer" alt={currentUser.length ? currentUser.name : "avatar icon"} onClick={toggleUserMenu}/>
          {userMenu && (<ul className="absolute bg-gray-200 p-3 right-0 top-6 mt-2 rounded w-max flex flex-col gap-2 triangle-up">
            <li className="hover:text-secondary-200"><Link href="/profile/1">My profile</Link></li>
            <li className="hover:text-secondary-200"><span>Logout</span></li>
          </ul>)}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
