import React, { useEffect } from "react";
// import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home.lazy";
import Navbar from "./component/Navbar/Navbar.lazy";
import ShowBlogs from "./component/ShowBlogs/ShowBlogs.lazy";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "../Header/Header.lazy";
// import Post from "../Post/Post.lazy";
import matter from "gray-matter";
import readingTime from "reading-time";
// import "./_content/BL-1001.md";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { AppActions, AppActionType } from "./redux/reducers/appReducer";
import { blogsContent } from "../src/_content/index";

function App() {
  const dispatch = useDispatch<Dispatch<AppActions>>();

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    blogsContent.forEach((file) => {
      handleContent(file);
    });
  };

  const handleContent = async (fileName: string) => {
    import(`./_content/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => {
            const { data, content } = matter(res);
            const readTime = readingTime(content);
            dispatch({
              type: AppActionType.setGetPost,
              payload: { data, content, readTime },
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <BrowserRouter>
        <React.Suspense fallback={"Loading ..."}>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/:id" element={<ShowBlogs />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
