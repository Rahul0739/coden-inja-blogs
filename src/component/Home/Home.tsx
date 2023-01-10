import Header from "../Header/Header.lazy";
import Post from "../Post/Post.lazy";

interface IProps {}
function Home(Props: IProps) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        marginTop: "100px",
      }}
    >
      <Header />
      <Post />
    </div>
  );
}

export default Home;
