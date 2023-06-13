import { Link } from "react-router-dom";
import "../styles/post.css";


export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          Music is the shorthand of emotion
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      A harmonious and pleasant sound that you hear is called music.
      We can construct pieces by playing musical instruments.
      Nature has music in it, and music has therapeutic qualities and is known as a universal language.
      </p>
    </div>
  );
}