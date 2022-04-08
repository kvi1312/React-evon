import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <YoutubeItem></YoutubeItem>
    </div>
  );
}
function YoutubeItem(props) {
  console.log(props);
  <div className="youtube-item">
    <div className="youtube-image">
      <img
        src="https://images.unsplash.com/photo-1649083048544-a6726e9c8ea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    </div>
    <div className="youtube-footer">
      <img
        src="https://images.unsplash.com/photo-1649083048544-a6726e9c8ea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="youtube-avatar"
      />
    </div>
    <div className="youtube-info">
      <h3 className="youtube-title">Learning React</h3>
      <h4 className="youtube-author">Khải lê</h4>
    </div>
  </div>;
}

export default App;
