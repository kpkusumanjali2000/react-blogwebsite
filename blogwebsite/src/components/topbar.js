import { Link } from "react-router-dom";
import "../styles/topbar.css";
import {FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaSearch} from "react-icons/fa";


function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <div className="topIcon">
        <FaInstagram/>
        <FaWhatsapp/>
        <FaFacebook/>
        <FaTwitter/>
        </div>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://p7.hiclipart.com/preview/844/244/1013/cartoon-royalty-free-business-women.jpg"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <FaSearch/>
      </div>
    </div>
  );
}

export default Topbar;