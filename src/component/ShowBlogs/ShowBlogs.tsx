import styles from "./ShowBlogs.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/appReducer";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import "../../styles/main_styles.css";
import { BsThreeDots } from "react-icons/bs";

function ShowBlogs() {
  const { id } = useParams();
  const { getPost } = useSelector<{ app: AppState }, AppState>(
    (states) => states.app
  );

  return (
    <div>
      <div className={`p-5 ${styles.blogsContent}`}>
        {getPost
          .filter(
            (post: any) =>
              post.data.Title.split(" ").join("-").toLowerCase() === id
          )
          .map((post: any) => {
            return (
              <div>
                <img
                  className="w-100"
                  src={post.data.HeaderImage}
                  alt="headerImage"
                />
                <div className="p-4">
                  <div>
                    <div className="d-flex justify-content-center flex-column align-items-center">
                      <div className="d-flex ">
                        {post.data.Tags.split(" ").map((tag: any) => (
                          <p
                            className="m-3 bg-info rounded p-1 text-white text-center"
                            style={{ width: "100px" }}
                            key={tag}
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                      <h1>{post.data.Title}</h1>
                      <h1>
                        <BsThreeDots />
                      </h1>
                    </div>
                  </div>
                  <article className={styles.article}>
                    <Markdown>{post.content}</Markdown>
                  </article>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <h1 className="mb-0">
                      <BsThreeDots />
                    </h1>
                    <p className="mb-0 fw-bold fs-3">Thanks for reading!!!</p>
                    <p className="mb-0 fs-6">{post.data.Author}</p>
                    <p className="mb-0 fs-6">Author</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* <div style={{ width: "100%", marginLeft: "7px" }}>
        <p>What is react js</p>
        <p>What is react js</p>
        <p>What is react js</p>
        <p>What is react js</p>
        <p>What is react js</p>
        <p>What is react js</p>
        <p>What is react js</p>
        <p>What is react js</p>
      </div> */}
    </div>
  );
}

export default ShowBlogs;
