import Image from "next/image"

const StoryCard = ({authorName, storyImg}) => {
  return (
  <>
    <figure className="story-card rounded-lg overflow-hidden relative sm:w-28 md:w-32 flex-none hover:opacity-80">
      <div className="bg-black bg-opacity-50 absolute right-0 left-0 bottom-0 top-0"></div>
      <Image src={storyImg} alt={authorName} height="192" width="160" className="w-full h-48 object-cover"/>
      <figcaption className="absolute bottom-2 left-2">
        <p className="text-white font-semibold leading-tight">{authorName}</p>
      </figcaption>
    </figure>
  </>
  )
}

export default StoryCard
