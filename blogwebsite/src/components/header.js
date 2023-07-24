import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://www.shutterstock.com/shutterstock/videos/1104542331/thumb/6.jpg?ip=x480"
        alt=""
      />
    </div>
  );
}