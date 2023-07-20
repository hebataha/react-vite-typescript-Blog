import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { Link } from "@mongez/react-router";
import { trans } from "@mongez/localization";
import { getPosts } from "../services/posts-service";
import ViewAllPostsBtn from "../ViewAllPostsButton/ViewAllPostsBtn";
export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    getPosts()
      .then((response) => {
        setPosts(response.data.posts.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);
  return (
    <>
      {loading && <Loading />}
      {error.length > 0 && <Error error={error} />}

      {posts.length === 0 && <h1> There is No Posts Yet :/ </h1>}
      {posts.map((post, id) => (
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
        {posts.length > 0 && <ViewAllPostsBtn />}
      </div>
    </>
  );
}
