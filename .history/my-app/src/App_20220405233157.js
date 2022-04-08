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
      <img src="https://images.unsplash.com/photo-1649089457308-7d0446772f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="" />
    </div>
    <div className="youtube-footer">
      <img src="https://images.unsplash.com/photo-1649089457308-7d0446772f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="youtube-avatar" />
      <div className="youtube-info">
        <h3 className="youtube-title">
          <learning-react></learning-react>
        </h3>
      </div>
    </div>
  </div>
  )
}

export default App;
