import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTag, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { postAtom } from "../../Atom/ToggleButton";
import TestData from "../TestData";
import PostsList from "../PostsList/PostsList";
// then - catch - final
library.add(faTag, faShareNodes);

const Posts: React.FC = () => {
  const displayPosts = postAtom.use("displayPost");
  if (!displayPosts) return null;

  function getDropValue() {
    console.log("");
  }

  return (
    <>
      <div className="container">
        <TestData />
        <div className={styles.flexPost}>
          <div className={styles.SinglePost}>{/* {error.length} */}</div>
          <PostsList />
        </div>
      </div>
    </>
  );
};
export default Posts;
