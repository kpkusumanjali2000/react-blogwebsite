import { useLocation } from "react-router";
import Header from "../components/header.js";
import Posts from "../components/posts.js";
import Sidebar from "../components/sidebar.js";
import SinglePost from "../components/singlePost.js";
import "../styles/home.css";

function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SinglePost/>
        <Sidebar />
      </div>
    </>
  );
}

export default Home;