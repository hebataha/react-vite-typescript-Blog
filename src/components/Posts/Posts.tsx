import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import imgPost from "../../assets/blog-post-02.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTag, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import ViewAllPostsBtn from "../ViewAllPostsButton/ViewAllPostsBtn";
import { trans } from "@mongez/localization";
import "../../config/localization";
import { Link } from "@mongez/react-router";
import { getPosts } from "../../config/services/posts-service";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { ContextDropdown } from "../../Store/context/ContextDropdown/ContextDropdown";
import DropdownTest from "../DropdownTest/DropdownTest";
import { toggleButtons } from "../../Atom/ToggleButton";
// then - catch - final
library.add(faTag, faShareNodes);

const Posts: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);
  const ctx = useContext(ContextDropdown);
  const toggle = toggleButtons.use();
  (toggle);
  useEffect(() => {
    getPosts()
      .then((response) => {
        setLoading(true);
        setPosts(response.data.posts.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  function getDropValue() {
    ("hi");
  }
  return (
    <>
      <div className="container">
        <div className={styles.flexPost}>
          {loading && <Loading />}
          {error.length > 0 && <Error error={error} />}

          {posts.length < 0 && <h1> There is No Posts Yet :/ </h1>}
          <div className={styles.SinglePost}>
            {/* {error.length} */}
            {toggle.displayPost && posts.length > 0 && (
              <>
                <DropdownTest getDropValue={getDropValue} />
                {posts.map((post, id) => (
                  <div key={id}>
                    <div className={styles.postImage}>
                      <img
                        src={
                          "https://source.unsplash.com/random/800x800/?img=" +
                          id
                        }
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
                          <span className={styles.auther}>
                            {trans("admin")}{" "}
                          </span>
                          <span>|</span>
                          <span className={styles.date}>May 31, 2020</span>
                          <span>|</span>
                          <span className={styles.comments}>
                            12 {trans("comments")}
                          </span>
                        </div>
                        <div className={styles.postDescription}>
                          <p>{post.body}</p>
                        </div>
                        <div className={styles.postFooter}>
                          <div className={styles.label}>
                            <FontAwesomeIcon icon="tag" />
                            {post.tags.map((singleTag, id) => (
                              <div key={id}>
                                <span>{singleTag} , </span>
                              </div>
                            ))}
                            {/* <span> Beauty, </span>
                        <span>Nature</span> */}
                          </div>
                          <div className={styles.share}>
                            <FontAwesomeIcon icon="share-nodes" />
                            <span> {trans("facebook")}, </span>
                            <span>{trans("twitter")}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className={styles.padding}>
            {toggle.displayPost && posts.length > 0 && <ViewAllPostsBtn />}
          </div>
        </div>
      </div>
    </>
  );
};
export default Posts;
