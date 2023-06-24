import { useEffect } from "react";
import { PostListAtom } from "../../Atom/post-list-atom";
import { getPosts } from "../services/posts-service";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import ListPosts from "../ListPosts/ListPosts";
import { endpoint } from "../../config/endpoints";

export default function PostsListAtom() {
  useEffect(() => {
    getPosts()
      .then((response) => {
        // PostListAtom.change("posts", response.data.posts.slice(0, 10));
        PostListAtom.merge({
          posts: response.data.posts.slice(0, 10),
          loading: false,
        });
        // PostListAtom.change("loading", false);
      })
      .catch((error) => {
        // PostListAtom.change("error", error.message),
        //   PostListAtom.change("loading", false);
        PostListAtom.merge({
          error: error.message,
          loading: false,
        });
      });
      const request = endpoint.getLastRequest()
      return () =>{
        request?.abort()
      }
  }, []);

  return (
    <>
      <Loading />
      <Error />
      <ListPosts />
    </>
  );
}
