// import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/appReducer";
import styles from "./Post.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

interface IProps {}
function Post(Props: IProps) {
  const { getPost } = useSelector<{ app: AppState }, AppState>(
    (states) => states.app
  );
  return (
    <div className="d-flex flex-direction-row flex-wrap justify-content-between">
      {getPost.map((post: any) => {
        return (
          <div className={styles.posts}>
            <div className={styles.topic}>
              <p>{post.data.Topic}</p>
            </div>
            <h2>{post.data.Title}</h2>
            <p className={styles.abstract}>{post.data.Abstract}..</p>
            <div className={styles.learnmore}>
              <Link
                to={`/blogs/${String(
                  post.data.Title.split(" ").join("-").toLowerCase()
                )}`}
              >
                Learn More
                <span className={styles.arrow}>
                  <AiOutlineArrowRight />
                </span>
              </Link>
              <span>
                <span>{post.readTime.text}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
