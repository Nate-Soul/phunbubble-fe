import Image from "next/image";
import Link from "next/link";
import Cover1 from "../assets/images/covers/cover-2.jpg";
import DisplayPicture from "../assets/images/profiles/me.png";
import Posts from "./Posts";

const Profile = () => {
  return (
    <>
      <div className="images w-full h-80 relative">
        <picture>
            <Image src={Cover1} alt="cover picture" className="w-full h-full object-cover rounded-t-xl"/>
        </picture>
        <figure className="absolute top-40 xl:top-48 left-0 right-0 text-center">
            <Image src={DisplayPicture} alt="display picture" className="w-48 h-48 rounded-full object-cover block mx-auto" width="200" height="200"/>
            <figcaption>
                <span className="font-semibold">Nate Soul</span>
            </figcaption>
        </figure>
      </div>
      <div className="py-5 px-12">
        <div className="profile-info shadow rounded-b-xl p-12 flex flex-wrap gap-4 items-center justify-center xl:justify-between mb-8 bg-white">
            <ul className="socials flex gap-3 text-2xl">
                <li>
                    <Link href="https://facebook.com" className="bi bi-facebook"></Link>
                </li>
                <li>
                    <Link href="https://instagram.com" className="bi bi-instagram"></Link>
                </li>
                <li>
                    <Link href="http://twitter.com" className="bi bi-twitter"></Link>
                </li>
                <li>
                    <Link href="http://linkedIn.com" className="bi bi-linkedin"></Link>
                </li>
                <li>
                    <Link href="https://github.com/Nate-Soul" className="bi bi-github"></Link>
                </li>
            </ul>
            <div className="actions flex gap-3">
                <button className="py-1 px-2 bg-main-200 text-white hover:bg-main-300 rounded-3xl text-sm">
                    <span className="bi bi-envelope"></span> Message
                </button>
                <button className="py-1 px-2 bg-secondary-100 text-white hover:bg-secondary-200 rounded-3xl text-sm">
                    <span className="bi bi-check"></span> 
                    Follow
                </button>
                <div className="item">
                    <span className="bi bi-dots"></span>
                </div>
            </div>
        </div>
        <Posts/>
      </div>
    </>
  )
}

export default Profile
