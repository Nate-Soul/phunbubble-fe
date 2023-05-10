import { useContext } from "react";
import Image from "next/image";
import Avatar from "../assets/images/icons/43.-avatar.svg";           
import profilePicture1 from "../assets/images/profiles/me.png";
import profilePicture2 from "../assets/images/profiles/person-2.jpg";
import { AuthContext } from "@/context/authContext";


const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam corrupti enim tempora, modi facere nihil?",
            name: "Nate Soul",
            userId: 1,
            profilePicture: profilePicture1
        },
        {
            id: 2,
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam corrupti enim tempora, modi facere nihil?",
            name: "Grace Doe",
            userId: 2,
            profilePicture: profilePicture2
        },
    ]

  return (
    <div className="comments">
        <div className="comment-box flex justify-between gap-5 mt-3 mb-5">
            <Image src={currentUser.length ? currentUser.profilePic : Avatar} alt={currentUser.length ? currentUser.name : "avatar"} className="w-8 h-8 object-cover rounded-full"/>
            <input type="text" placeholder="Write a comment" className="flex-5 border border-gray-200 rounded p-2 bg-transparent outline-none hover:border-secondary-100 focus:border-secondary-100"/>
            <button className="rounded py-2 px-3 inline-flex items-center justify-center bg-secondary font-semibold text-white hover:bg-secondary-100"><span className="bi bi-send"></span></button>
        </div>
      {comments ? comments.map(comment => (
        <div className="comment mb-6 flex justify-between gap-5" key={comment.id}>
            <Image src={comment.profilePicture} alt={comment.name} className="w-8 h-8 object-cover rounded-full"/>
            <div className="flex flex-col gap-1 items-start flex-5">
                <span className="font-semibold">{comment.name}</span>
                <p className="text-gray-500">{comment.content}</p>
            </div>
            <span className="text-xs flex-1 self-center text-gray-400">1 hour ago</span>
        </div>
      )): 
      ( <p>Be the first to comment </p> )
      } 
    </div>
  )
}

export default Comments
