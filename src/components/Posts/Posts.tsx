import React from "react";
import styles from "./style.module.scss";
import imgPost from "../../assets/blog-post-02.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTag, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import ViewAllPostsBtn from "../ViewAllPostsButton/ViewAllPostsBtn";
import { trans } from "@mongez/localization";
import "../../config/localization"
import { Link } from "@mongez/react-router";

library.add(faTag, faShareNodes);
const Posts: React.FC = () => {
  
  return (
    <>
      <div className="container">
        <div className={styles.flexPost}>
          <div className={styles.SinglePost}>
            <div className={styles.postImage}>
              <img src={imgPost} />
            </div>
            <div className={styles.postBody}>
              <Link to="/singlePosts/1">
                <div className={styles.postTitle}>
                  <h3>LIFESTYLE 1</h3>
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
                  <p>
                    Stand Blog is a free HTML CSS template for your CMS theme.
                    You can easily adapt or customize it for any kind of CMS or
                    website builder. You are allowed to use it for your
                    business. You are NOT allowed to re-distribute the template
                    ZIP file on any template collection site for the download
                    purpose. Contact TemplateMo for more info. Thank you.
                  </p>
                </div>
                <div className={styles.postFooter}>
                  <div className={styles.label}>
                    <FontAwesomeIcon icon="tag" />
                    <span> Beauty, </span>
                    <span>Nature</span>
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

          <div className={styles.SinglePost}>
            <div className={styles.postImage}>
              <img src={imgPost} />
            </div>
            <div className={styles.postBody}>
              <Link to="/singlePosts/1">
                <div className={styles.postTitle}>
                  <h3>LIFESTYLE 2</h3>
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
                  <p>
                    Stand Blog is a free HTML CSS template for your CMS theme.
                    You can easily adapt or customize it for any kind of CMS or
                    website builder. You are allowed to use it for your
                    business. You are NOT allowed to re-distribute the template
                    ZIP file on any template collection site for the download
                    purpose. Contact TemplateMo for more info. Thank you.
                  </p>
                </div>
                <div className={styles.postFooter}>
                  <div className={styles.label}>
                    <FontAwesomeIcon icon="tag" />
                    <span> Beauty, </span>
                    <span>Nature</span>
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
{/*  */}
<div className={styles.SinglePost}>
            <div className={styles.postImage}>
              <img src={imgPost} />
            </div>
            <div className={styles.postBody}>
              <Link to="/singlePosts/1">
                <div className={styles.postTitle}>
                  <h3>LIFESTYLE 3</h3>
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
                  <p>
                    Stand Blog is a free HTML CSS template for your CMS theme.
                    You can easily adapt or customize it for any kind of CMS or
                    website builder. You are allowed to use it for your
                    business. You are NOT allowed to re-distribute the template
                    ZIP file on any template collection site for the download
                    purpose. Contact TemplateMo for more info. Thank you.
                  </p>
                </div>
                <div className={styles.postFooter}>
                  <div className={styles.label}>
                    <FontAwesomeIcon icon="tag" />
                    <span> Beauty, </span>
                    <span>Nature</span>
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
          <div className={styles.padding}>
            <ViewAllPostsBtn />
          </div>
        </div>
      </div>
    </>
  );
};
export default Posts;
