import { useEffect, useState } from "react";
import { fetchPosts } from "../api/request";

const COHORT_NAME = "2302-acc-et-web-pt-a";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

//A request to this endpoint fetches an array of post objects.

export default function Posts() { 
  const [posts, setPosts] = useState([]);
  //TODO See a list of posts
  //TODO creat a new post
  useEffect(() => {
    const getPosts = async ()=>{
      let posts = await  fetchPosts();
      console.log ("posts", posts)
      setPosts(posts.data.posts)
    }
    getPosts();
   
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      <div>
       {posts.map((post, i)=><div key={i}>
        {post.title}

       </div>)} 


      </div>
    </div>
  );
}
