import { useEffect } from "react";
import { PostListAtom } from "../../Atom/post-list-atom";
import { getPosts } from "../services/posts-service";

export default function PostsListAtom() {
 const getPostsAtom = PostListAtom.use("posts")
  useEffect(() => {
    
    // const real =  getPosts().then(response => {return response.data.posts},
    getPosts().then(response => {
    
       PostListAtom.change("posts" ,  response.data.posts)
      })
    //  PostListAtom.change("posts" ,  )
    
  
  }
  , []);
console.log(getPostsAtom)
  return (
    <>
      <h1>
     

      </h1>
    </>
  );
}
