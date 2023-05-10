import PostCard from "./PostCard";
import picture1 from "../assets/images/gallery/7.jpg";
import picture2 from "../assets/images/gallery/9.jpg";
import picture3 from "../assets/images/gallery/10.jpg";
import Person1 from "../assets/images/profiles/person-1.jpg";
import Person2 from "../assets/images/profiles/person-2.jpg";
import Person3 from "../assets/images/profiles/person-3.jpg";

const Posts = () => {

  const posts = [
    {id:1,title:"Hello there",imgUrl:picture1,author:"Jane Doe",created:"few seconds ago",authorImgUrl:Person1},
    {id:2,title:"Hello theree",imgUrl:picture2,author:"Grace Doe",created:"2 hrs ago",authorImgUrl:Person2},
    {id:3,title:"Hello thereee",imgUrl:picture3,author:"Dylan Doe",created:"5 min ago",authorImgUrl:Person3}
  ];

  return (
   <section>
     {posts && posts.map(post => (
         <PostCard key={post.id} title={post.title} imgUrl={post.imgUrl.src} author={post.author} authorImgUrl={post.authorImgUrl.src} created={post.created}/>
         )
       )
     }
    </section>
  )
}

export default Posts