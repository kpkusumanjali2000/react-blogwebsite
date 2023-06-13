import Post from "../components/post.js";
import "../styles/posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://www.freepnglogos.com/uploads/music-notes-png/download-music-notes-download-png-png-image-15.png"/>
      <Post img="https://media.istockphoto.com/id/488580912/photo/cello-silhouette.jpg?s=612x612&w=0&k=20&c=xmmVc-mF_IROL5HlaIKxxV2-qZCWukC3liTa3jUd7v8=" />
      <Post img="https://img.freepik.com/premium-photo/pink-piano-with-keyboard-close-up-music-note-top-music-instrument-piano-close-up-3d-illus_67155-15854.jpg?w=360" />
      <Post img="https://www.bansuriworld.com/sites/bansuriworld/files/slideshows/flute_page/02-bansuri_indian_bamboo_flute.jpg"/>
      <Post img="https://media.istockphoto.com/id/894058154/photo/musical-instruments.jpg?s=612x612&w=0&k=20&c=uB0TFyqeY1wu1BPyH2EB7NMoOCaSb86pk7YNQ5QVCGQ="/>
    </div>
  );
}