import "./App.css";
import Counter from "./component/counter/counter";
import Toogle from "./component/toogle/toogle";
import { youtubedata } from "./youtubedata";
import Game from "./component/tictactoe/Game";

//parent component là App()
function App() {
  return (
    // <div className="youtube-list">
    //   {youtubedata.map((item, index) => (
    //     <YoutubeItem
    //       key={item.id}
    //       image={item.image}
    //       author={item.author}
    //       avatar={item.avatar}
    //       title={item.title}
    //       className= 'abc'
    //     ></YoutubeItem>
    //   ))}
    // </div>
    <div className="">
      {/* <Toogle></Toogle>
      <Counter></Counter> */}
      <Game></Game>
    </div>
  );
}

function YoutubeItem(props) {
  return (
    <div className={`youtube-item ${props.className}`}>
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
