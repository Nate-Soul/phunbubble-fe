import {useContext} from "react";
import Image from "next/image";
import { AuthContext } from "@/context/authContext";
import StoryCard from "./StoryCard";
import storyPic1 from "../assets/images/stories/26.jpg";
import storyPic2 from "../assets/images/stories/27.jpg";
import storyPic3 from "../assets/images/stories/22.jpg";
import storyPic4 from "../assets/images/stories/21.jpg";
import storyPic5 from "../assets/images/stories/24.jpg";
import storyPic6 from "../assets/images/stories/25.jpg";

const StoriesGrid = () => {

  const {currentUser} = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: storyPic1,
    },
    {
      id: 2,
      name: "Jane Doe",
      img: storyPic2,
    },
    {
      id: 3,
      name: "James Doe",
      img: storyPic3,
    },
    {
      id: 4,
      name: "Jeremy Doe",
      img: storyPic4,
    },
    {
      id: 5,
      name: "Jackson Doe",
      img: storyPic5,
    },
    {
      id: 6,
      name: "Jamie Doe",
      img: storyPic6,
    },
    {
      id: 7,
      name: "Jamie Doe",
      img: storyPic1,
    },
    {
      id: 8,
      name: "Jamie Doe",
      img: storyPic4,
    },
    {
      id: 9,
      name: "Jamie Doe",
      img: storyPic3,
    },
    {
      id: 10,
      name: "Jamie Doe",
      img: storyPic3,
    },
  ]

  return (
    <section>
      <div className="stories-grid flex gap-3 mb-8 horizontal-scroll hide-scrollbar">
        {currentUser.length && (
        <figure className="story-card rounded-lg overflow-hidden relative w-1/2 sm:w-28 md:w-32 flex-none hover:opacity-80">
        <div className="bg-black bg-opacity-50 absolute right-0 left-0 bottom-0 top-0"></div>
          <Image src={currentUser?.profilePic} alt={currentUser?.name} className="w-full h-48 object-cover" width="100%" height="192"/>
          <figcaption className="absolute bottom-2 left-2">
            <button className="rounded-full w-6 h-6 border-none bg-secondary text-white text-xl font-bold inline-flex items-center justify-center hover:bg-secondary-100">
              <span className="bi bi-plus"></span>
            </button>
            <p className="text-white font-semibold text-sm leading-tight">{currentUser.name}</p>
          </figcaption>
        </figure>)}
        {stories && stories.map((story) => (
          <StoryCard key={story.id} authorName={story.name} storyImg={story.img}/>
        ))}
      </div>
    </section>
  )
}

export default StoriesGrid
