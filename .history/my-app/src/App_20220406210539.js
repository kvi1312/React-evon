// import logo from "./logo.svg";
import "./App.css";
// function Feature() {
//   return (
//     <div className="feature">
//       <img src="" alt="" className="feature-image" />
//       <h3 className="feature-title">title</h3>
//       <p className="feature-desc">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa
//         reprehenderit totam earum exercitationem ipsam cupiditate illo fugiat
//         eaque repudiandae?
//       </p>
//     </div>
//   );
// }
const youtubeItems = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "learning react",
    author: "khaile",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "learning js",
    author: "evon",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGpzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "learning php",
    author: "an",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1544982877-f0f4427dee24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8anN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "learning html",
    author: "evon",
  },
];
// function YoutubeImtem(props) {
//   return (
//     <div className="youtube-item">
//       <div className="youtube-image">
//         <img src={props.image} alt="" className="" />
//       </div>
//       <div className="youtube-footer">
//         <img
//           src="https://images.unsplash.com/photo-1649089457308-7d0446772f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
//           alt=""
//           className="youtube-avatar"
//         />
//         <div className="youtube-info">
//           <h3 className="youtube-title">learning react</h3>
//           <h4 className="youtube-author">{props.author}</h4>
//         </div>
//       </div>
//     </div>
//   );
// }

const Courses = ({ youtubeItems }) => {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={course.image} alt="" className="" />
      </div>
      <div className="youtube-footer">
        <img src={course.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">{course.title}</h3>
          <h4 className="youtube-author">{course.author}</h4>
        </div>
      </div>
    </div>
  );
};

//parent component là App()
function App() {
  return (
    <div className="youtube-list">
      {youtubeItems.map((course) => {
        <courses youtubeItems={course} />;
      })}
    </div>
  );
}
export default App;
