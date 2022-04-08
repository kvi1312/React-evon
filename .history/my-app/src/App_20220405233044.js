import logo from "./logo.svg";
import "./App.css";
function Feature() {
  return (
    <div className="feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">title</h3>
      <p className="feature-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa
        reprehenderit totam earum exercitationem ipsam cupiditate illo fugiat
        eaque repudiandae?
      </p>
    </div>
  );
}
//parent component là App()
function App() {
  return (
    <div>
    {/* children component */}
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
    </div>
  );
}

function YoutubeImtem(){
  return(
    <div className="youtube-item">
    <div className="youtube-image">
      <img src="" alt="" />
    </div>
  </div>
  )
}

export default App;
