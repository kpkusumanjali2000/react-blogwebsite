import Sidebar from "../components/sidebar.js";
import SinglePost from "../components/singlePost.js";
import "../styles/single.css";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;