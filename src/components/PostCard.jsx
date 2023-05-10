import {useState} from "react";
import Image from "next/image";
import Comments from "./Comments";


const PostCard = ({id, title, imgUrl, created, author, authorImgUrl}) => {

  const [liked, setLiked] = useState(false);
  const [commentDialog, setCommentDialog] = useState(false);
  const [postDialog, setPostDialog] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  }

  const togglePostDialog = () => {
    setPostDialog(!postDialog);
  }

  const toggleCommentDialog = () => {
    setCommentDialog(!commentDialog);
  }

  return (
    <article data-id={id} className="rounded-xl w-full bg-white p-5 mb-6 shadow shadow-gray-300 flex flex-col gap-4">
      <header className="flex items-center justify-between text-sm">
        <figure className="userInfo flex items-center gap-3">
            <Image src={authorImgUrl} className="w-10 h-10 object-cover rounded-full" height="40" width="40" alt={author}/>
            <figcaption className="flex flex-col">
                <span className="text-sm font-semibold">{author}</span>
                <span className="text-xs">{created}</span>
            </figcaption>
        </figure>
        <ul>
          <li className="relative">
            {!postDialog ? (
              <span className="bi bi-three-dots cursor-pointer" onClick={togglePostDialog}></span>
              ) : (
              <span className="bi bi-x-lg cursor-pointer" onClick={togglePostDialog}></span>
            )}
            {postDialog && (
            <ul className="absolute right-6 top-0 p-3 rounded bg-gray-100 text-black w-24 flex flex-col gap-3 z-20">
              <li><span className="bi bi-pen"></span> Edit</li>
              <li><span className="bi bi-trash"></span> Delete</li>
            </ul>)
            }
          </li>
        </ul>
      </header>
      <div className="post-body">
        <p className="mb-3">{title}</p>
        <Image src={imgUrl} className="w-full max-h-96 object-cover" width="600" height="240" alt={title}/>
      </div>
      <footer className="flex items-center justify-between">
        <div className="icon-group flex items-center gap-2 cursor-pointer text-sm">
          {!liked ? <span className="bi bi-heart" onClick={handleLike}></span> : <span className="bi bi-heart-fill text-red-500" onClick={handleLike}></span> } 12 Likes
        </div>
        <div className="icon-group flex items-center gap-2 cursor-pointer text-sm" onClick={toggleCommentDialog}>
          <span className="bi bi-chat-dots"></span> 12 Comments
        </div>
        <div className="icon-group flex items-center gap-2 cursor-pointer text-sm">
          <span className="bi bi-share"></span> Share
        </div>
      </footer>
      {commentDialog && <Comments/>}
    </article>
  )
}

export default PostCard