import { useEffect } from "react";
import styles from "./style.module.scss";
import { PostListAtom } from "../../Atom/post-list-atom";
import { getPosts } from "../services/posts-service";
import { Link } from "@mongez/react-router";
import { trans } from "@mongez/localization";
import ViewAllPostsBtn from "../ViewAllPostsButton/ViewAllPostsBtn";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

export default function PostsListAtom() {
  const getPostsAtom = PostListAtom.use("posts");
  const catchError = PostListAtom.use("error");
  const loading = PostListAtom.use("loading");

  useEffect(() => {
    // const real =  getPosts().then(response => {return response.data.posts},
    getPosts()
      .then((response) => {
        PostListAtom.change("posts", response.data.posts.slice(0, 10));
        PostListAtom.change("loading", false);
      })
      .catch((error) => {
        PostListAtom.change("error", error.message),
        PostListAtom.change("loading", false);
      });
    //  PostListAtom.change("posts" ,  )
  }, []);
  // // console.log(getPostsAtom)
  if (!getPostsAtom) return catchError;

  // console.log(!getPostsAtom)
  return (
    <>
    <Loading loading={loading}/>
      <Error catchError={catchError} />
      {getPostsAtom.map((post, id) => (
        <div className={styles.SinglePost} key={id}>
          <div className={styles.postImage}>
            <img
              src={"https://source.unsplash.com/random/800x800/?img=" + id}
            />
          </div>
          <div className={styles.postBody}>
            <Link to="/singlePosts/1">
              <div className={styles.postTitle}>
                <h3>{post.title}</h3>
              </div>
              <div className={styles.postHeadLine}>
                <h3>Best Template Website For HTML CSS</h3>
              </div>

              <div className={styles.postInfo}>
                <span className={styles.auther}>{trans("admin")} </span>
                <span>|</span>
                <span className={styles.date}>May 31, 2020</span>
                <span>|</span>
                <span className={styles.comments}>12 {trans("comments")}</span>
              </div>
              <div className={styles.postDescription}>
                <p>{post.body}</p>
              </div>
              <div className={styles.postFooter}>
                <div className={styles.label}>
                  {post.tags.map((singleTag, id) => (
                    <div key={id}>
                      <span>{singleTag} , </span>
                    </div>
                  ))}
                  {/* <span> Beauty, </span>
                   <span>Nature</span> */}
                </div>
                <div className={styles.share}>
                  <span> {trans("facebook")}, </span>
                  <span>{trans("twitter")}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
      <div className={styles.padding}>
        {getPostsAtom.length > 0 && <ViewAllPostsBtn />}
      </div>
    </>
  );
}
