// import logo from "./logo.svg";
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
    <div className="youtube-list">
      {/* children component */}
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}

      <YoutubeImtem
        image="https://images.unsplash.com/photo-1618522761561-f1211c4781dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        author="khải lê đẹp trai"
        avatar="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        title="Learning React"
      ></YoutubeImtem>

      <YoutubeImtem
        image="https://images.unsplash.com/photo-1618522761561-f1211c4781dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        author="Evondev"
        avatar="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        title="Learning Js"
      ></YoutubeImtem>

      <YoutubeImtem
        image="https://images.unsplash.com/photo-1618522761561-f1211c4781dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        author="Unicode"
        avatar="https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        title="Learning PHP"
      ></YoutubeImtem>

      <YoutubeImtem
        image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8anN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        author="F8"
        avatar="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        title="Learning HTML"
      ></YoutubeImtem>
    </div>
  );
}

function YoutubeImtem(props) {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" className="" />
      </div>
      <div className="youtube-footer">
        <img
          src="https://images.unsplash.com/photo-1649089457308-7d0446772f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="youtube-avatar"
        />
        <div className="youtube-info">
          <h3 className="youtube-title">learning react</h3>
          <h4 className="youtube-author">{props.author}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
