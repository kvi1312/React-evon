// import logo from "./logo.svg";
import "./App.css";
import {youtubedata} form
//parent component là App()
function App() {
  return (
    <div className="youtube-list">
      <YoutubeImtem
        image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        author="khải lê đẹp trai"
        avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        title="Learning React"
      ></YoutubeImtem>

      <YoutubeImtem
        image="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8anN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        author="Evondev"
        avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        title="Learning Js"
      ></YoutubeImtem>

      <YoutubeImtem
        image="https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        author="Unicode"
        avatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        title="Learning PHP"
      ></YoutubeImtem>

      <YoutubeImtem
        image="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        author="F8"
        avatar="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
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
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title}</h3>
          <h4 className="youtube-author">{props.author}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
