import "./App.css";
import Counter from "./component/counter/counter";
import Toogle from "./component/toogle/toogle";
import { youtubedata } from "./youtubedata";
import Game from "./component/tictactoe/Game";
import Button from "./component/button/Button";
import Card from "./component/card/Card";
import CardList from "./component/card/CardList";
import { GlobalStyles } from "./GlobalStyle";
import Card2 from "./component/card/Card2";
import { ThemeProvider } from "styled-components";
import CardTailWind from "./component/card/CardTailWind";
import Photos from "./component/photo/Photos";
import Timer from "./component/Timer";
import Header from "./component/Header";
import HackerNews from "./component/news/HackerNews";
import HackerNewsWithReducer from "./component/news/HackerNewsWithReducer";
import {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { set, update } from "lodash";
import useLinkNewTab from "./hooks/useLinkNewTab";
import useHover from "./hooks/useHover";
import HackerNewsWithHook from "./component/news/HackerNewsWithHook";
import Form from "./component/form/Form";
import MovieSearchApp from "./component/Form-library/MovieSearchApp";
import SignUpForm from "./component/form/SignUpForm";
import SignUpFormFinal from "./component/form/SignUpFormFinal";
import SignUpFormHook from "./component/form/SignUpFormHook";
import Modal from "./component/modal/Modal";
import DropdownPortal from "./component/portal/DropdownPortal";
import Tooltip from "./component/portal/Tooltip";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import PortalAdvance from "./component/portal/PortalAdvance";
import ModalBase from "./component/portal/ModalBase";
import ModalAdvance from "./component/portal/ModalAdvance";
import { CountProvider, useCount } from "./context/countContext";
import HeaderMain from "./HeaderMain";
import { AuthProvider } from "./context/authContext";
import { GalleryProvider } from "./context/galleryContext";
import PhotoList from "./component/gallery/PhotoList";
import CartList from "./component/gallery/CartList";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import BlogPage from "./component/BlogPage";
import ProfilePage from "./component/ProfilePage";
import BlogPageDetail from "./component/BlogPageDetail";
//parent component là App()
// function App() {
//   return (
//     // <div className="youtube-list">
//     //   {youtubedata.map((item, index) => (
//     //     <YoutubeItem
//     //       key={item.id}
//     //       image={item.image}
//     //       author={item.author}
//     //       avatar={item.avatar}
//     //       title={item.title}
//     //       className= 'abc'
//     //     ></YoutubeItem>
//     //   ))}
//     // </div>
//     <div className="">
//       {/* <Toogle></Toogle>
//       <Counter></Counter> */}
//       <Game></Game>
//     </div>
//   );
// }

// function YoutubeItem(props) {
//   return (
//     <div className={`youtube-item ${props.className}`}>
//       <div className="youtube-image">
//         <img src={props.image} alt="" className="" />
//       </div>
//       <div className="youtube-footer">
//         <img src={props.avatar} alt="" className="youtube-avatar" />
//         <div className="youtube-info">
//           <h3 className="youtube-title">{props.title}</h3>
//           <h4 className="youtube-author">{props.author}</h4>
//         </div>
//       </div>
//     </div>
//   );
// }

// ======================== SASS -- MODULE CSS ==============================/
// function App() {
//   return (
//     // SASs
//     // <div className="">
//     //   <Button>Primary</Button>
//     //   <Button className="btn--secondary">Secondary</Button>
//     // </div>

//     //CSS MODULE
//     <div className="">
//       <Button>Primary</Button>
//       <Button secondary>Secondary</Button>
//     </div>
//   );
// }

// ======================== CSS STYLED COMPONENT ==============================/
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
//   orange: "#ffa400",
// };
// function App() {
//   return (
//     <div className="">
//       <ThemeProvider theme={theme}>
//         <GlobalStyles></GlobalStyles>
//         <CardList>
//           {/* <Card secondary={true}></Card>
//         <Card></Card>
//         <Card></Card>
//         <Card></Card>
//         <Card></Card>
//         <Card></Card> */}
//           <Card2 secondary={true}></Card2>
//           <Card2></Card2>
//           <Card2></Card2>
//           <Card2></Card2>
//           <Card2></Card2>
//           <Card2></Card2>
//         </CardList>
//       </ThemeProvider>
//     </div>
//   );
// }
//========================= TAILWINDCSS =======================//
// function App() {
//   return (
//     <div className="">
//       {/* <GlobalStyles></GlobalStyles> */}
//       <CardList>
//         <CardTailWind primary></CardTailWind>
//       </CardList>
//     </div>
//   );
// }

//===================== USE EFFECT =========================//

// function App() {
//   return (
//     <div className="">
//       <Photos></Photos>
//     </div>
//   );
// }

// DEPENDENCIES
// function App() {
//   return (
//     <div className="">
//       <Counter></Counter>
//     </div>
//   );
// }

// CLEAN UP FUNCTION
// function App() {
//   return (
//     <div className="">
//       {/* <Timer></Timer> */}
//       {/* <Header></Header> */}
//     </div>
//   );
// }
// function App() {
//   return (
//     <div className="">
//       {/* <HackerNews></HackerNews> */}
//       <HackerNewsWithReducer></HackerNewsWithReducer>
//     </div>
//   );
// }
//============================= USE REF ====================//
// so sánh usestate và useref
// function App() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);
//   const handle = () => {
//     const updateCount = count + 1;
//     console.log(`clicked ${updateCount} times`);
//     setCount(updateCount);
//   };

//   const handle2 = () => {
//     console.log("ref re-render");
//     return countRef.current + 1;
//   };
//   console.log("render");
//   return (
//     <div className="flex gap-x-5">
//       <button onClick={handle} className="border border-blue-500">
//         useState
//       </button>
//       <button onClick={handle2} className="border border-red-500">
//         useRef
//       </button>
//     </div>
//   );
// }

// TIME STOP
// function App() {
//   const timerRef = useRef(null);
//   const [count, setCount] = useState(0);

//   const handleStart = () => {
//     if (timerRef.current) return;
//     timerRef.current = setInterval(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//     console.log(timerRef.current);
//   };

//   //lúc này thằng handleStop muốn dừng phải xài clearinterval giá trị của thằng handle Start => vì vậy dùng useRef làm trung gian để cho thằng handleStop truy xuất vào
//   const handleStop = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//     console.log(timerRef.current);
//   };

//   //khi rời component thì nó sẽ dừng cái count lại
//   useEffect(() => {
//     return () => clearInterval(timerRef.current);
//   }, []);

//   return (
//     <div className="">
//       <h3>Counter : {count}</h3>
//       <div className="flex gap-x-5">
//         <button onClick={handleStart}>Start</button>
//         <button onClick={handleStop}>Stop</button>
//       </div>
//     </div>
//   );
// }

//TRUY CAP VAO DOM BANG USE REF

// function App() {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current.focus();
//     console.log(ref.current);
//   }, []);
//   return (
//     <div className="">
//       <input
//         ref={ref}
//         type="text"
//         className="border border-black-400"
//         placeholder="Auto focus input"
//       />
//     </div>
//   );
// }

//TEXT AUTO RESIZE : khi gõ nhiều sẽ hiện thanh scroll, bài này giúp xem hết tất cả nội dung bằng cách thay đổi chiều cao text area

// function App() {
//   const [state, setState] = useState("text");
//   const ref = useRef(null);
//   const [textHeight, setTextHeight] = useState("auto");

//   const handleChange = (e) => {
//     setTextHeight(`${ref.current.scrollHeight}px`);

//     setState(e.target.value);
//   };
//   useEffect(() => {
//     setTextHeight(`${ref.current.scrollHeight}px`);
//   }, [state]);
//   return (
//     <div className="p-5">
//       <textarea
//         className="w-full max-w-[400px] overflow-hidden transition-all p-5 rounded-lg border border-gray-400 focus:border-blue-400 resize-none"
//         placeholder="Please enter your content"
//         ref={ref}
//         value={state}
//         style={{
//           height: textHeight,
//         }}
//         onChange={handleChange}
//       ></textarea>
//     </div>
//   );
// }

//DROP DOWN

// function App() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const ref = useRef();
//   useEffect(() => {
//     function handleClickDropdown(e) {
//       if (ref.current && !ref.current.contains(e.target)) {
//         setShowDropdown(false);
//       }
//     }
//     document.addEventListener("click", handleClickDropdown);
//     return () => {
//       document.removeEventListener("click", handleClickDropdown);
//     };
//   }, []);

//   return (
//     <div className="p-5">
//       <div className="relative w-full max-w-[400px]" ref={ref}>
//         <div
//           className="border border-gray-200 rounded-lg p-5 w-full cursor-pointer"
//           onClick={() => setShowDropdown(!showDropdown)}
//         >
//           Selected
//         </div>
//         {showDropdown && (
//           <div className="p-5 border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
//             <div className="p-5 cursor-pointer">javascript</div>
//             <div className="p-5 cursor-pointer">html</div>
//             <div className="p-5 cursor-pointer">css</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
//}

//========================CUSTOM HOOK================//
// function App() {
//   const { ref } = useLinkNewTab();
//   const { hovered, nodeRef } = useHover();
//   return (
//     <div className="entry-content" ref={ref}>
//       <p className="mb-5">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste deleniti
//         distinctio ipsa corrupti rerum aliquid soluta commodi, iure doloribus
//         obcaecati placeat error porro quidem nulla voluptatum tempore.
//         Voluptate, saepe{" "}
//         <a
//           href="https://google.com"
//           className={`underline ${hovered ? "text-green-400" : ""}`}
//           ref={nodeRef}
//         >
//           google.com
//         </a>
//         ?
//       </p>
//       <p className="mb-5">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste deleniti
//         distinctio ipsa{" "}
//         <a href="https://google.com" className="underline">
//           google.com
//         </a>{" "}
//         rerum aliquid soluta commodi, iure doloribus obcaecati placeat error
//         porro quidem nulla voluptatum tempore. Voluptate, saepe suscipit?
//       </p>
//       <p className="mb-5">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste deleniti
//         distinctio ipsa corrupti rerum aliquid soluta commodi, iure doloribus
//         obcaecati{" "}
//         <a href="https://google.com" className="underline">
//           google.com
//         </a>{" "}
//         error porro quidem nulla voluptatum tempore. Voluptate, saepe suscipit?
//       </p>
//     </div>
//   );
// }

// UseRef FOR HACKERNEW.JS

// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div className="">
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <HackerNews></HackerNews>}
//     </div>
//   );
// }

// HACKER NEW WITH HOOK
// function App() {
//   return (
//     <div className="">
//       <HackerNewsWithHook></HackerNewsWithHook>
//     </div>
//   );
// }
//============================ FORM ===================================//
// function App() {
//   return (
//     <div className="">
//       {/* <Form></Form> */}
//       {/* <MovieSearchApp></MovieSearchApp> */}
//       {/* <SignUpForm></SignUpForm> */}
//       {/* <SignUpFormFinal></SignUpFormFinal> */}
//       <SignUpFormHook></SignUpFormHook>
//     </div>
//   );
// }

//=========================== Fragments=========================//

// function App() {
//   const firstName = "khai";
//   const lastName = "le";
//   const [on, setOn] = useState(false);

//   return (
//     <div className="flex">
//       {!on && (
//         <Fragment>
//           {firstName}
//           {lastName}
//         </Fragment>
//       )}
//     </div>
//   );
// }

//=========================== PORTAL=========================//

// function App() {
//   const [show, setshow] = useState(false);

//   return (
//     <Fragment>
//       {/* <div className="">
//         <Modal open={show} handleClose={() => setshow(false)}></Modal>
//       </div>
//       <button
//         onClick={() => setshow(true)}
//         className="rounded-md m-5 bg-blue-500 p-4 text-white"
//       >
//         Show modal
//       </button>
//       <div className="relative z-30">
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores non
//         eum hic veritatis, dolorem illo totam earum reiciendis animi quisquam.
//       </div>

//       //Dropdown
//       <div className="overflow-hidden m-5">
//         <DropdownPortal></DropdownPortal>
//       </div> */}

//       <div className="">
//         <Tooltip text="hover me">THIS IS TOOLTIP CONTENT</Tooltip>
//       </div>
//     </Fragment>
//   );
// }

// =================== React error boundary lib================//

// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="">
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//         <Game></Game>
//         {/* nếu thằng game bị lỗi thì nó sẽ báo error trên giao diện */}
//       </ErrorBoundary>
//     </div>
//   );
// }
// =================== PROPS TYPE PACKAGE================//

// function App() {
//   return (
//     <div className="">
//       <Modal open={true} handleClose={() => {}}></Modal>
//     </div>
//   );
// }

//======================== PORTAL ADVANCE===============//

// function App() {
//   const [openModalBase, setopenModalBase] = useState(false);

//   const [openModal, setOpenModa] = useState(false);
//   return (
//     <div className="">
//       <button
//         className="rounded-lg p-5 text-white text-center bg-blue-500 mr-5"
//         onClick={() => setopenModalBase(true)}
//       >
//         Show
//       </button>
//       <button
//         className="rounded-lg p-5 text-white text-center bg-blue-500"
//         onClick={() => setOpenModa(true)}
//       >
//         Show openModal
//       </button>

//       <ModalBase
//         visible={openModalBase}
//         onClose={() => setopenModalBase(false)}
//       >
//         <div className="bg-white p-10 rounded-lg max-w-[300px] max-h-[300px]">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
//           consectetur velit rem. Repellat aut aliquam eaorum ad tempore
//           repellendus nemo.
//         </div>
//       </ModalBase>

//       <ModalAdvance visible={openModal} onClose={() => setOpenModa(false)}>
//         <div className="modal-content z-10 relative bg-white p-10 rounded-lg max-w-[482px] w-full">
//           <span className="absolute top-0 flex items-center justify-center right-0 w-10 h-10 p-1 rounded-full cursor-pointer bg-white -translate-y-2/4 translate-x-2/4" onClick={() => setOpenModa(false)}>
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 14 14"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
//                 fill="#84878B"
//               />
//             </svg>
//           </span>
//           <h2 className="mb-5 text-4xl font-medium font-semibold text-center">
//             Welcome Back!
//           </h2>
//           <div className="flex flex-col gap-3 mb-5">
//             <label htmlFor="email" className="text-sm cursor-pointer">
//               Email address
//             </label>

//             <input
//               type="text"
//               className="w-full text-sm leading-normal rounded-lg bg-[#E7ecf3] p-4"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="flex flex-col gap-3 mb-5">
//             <label htmlFor="password" className="text-sm cursor-pointer">
//               password
//             </label>

//             <input
//               type="text"
//               className="w-full  text-sm leading-normal rounded-lg bg-[#E7ecf3] p-4"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button className="w-full p-4 text-base font-semibold text-white bg-blue-500 rounded-lg">
//             Sign in
//           </button>
//         </div>
//       </ModalAdvance>
//     </div>
//   );
// }

// =========================== CONTEXT ========================//

// function CountDisplay() {
//   const [count] = useCount(); //count này destructuring từ thằng counProvider
//   return <div>the count is: {count} </div>;
// }

// function CounterNum() {
//   const [, setCount] = useCount();
//   const increment = () => setCount((c) => c + 1);
//   return (
//     <button
//       onClick={increment}
//       className="p-4 rounded-lg text-white font-semibold bg-purple-500"
//     >
//       Increment
//     </button>
//   );
// }

// function App() {
//   return (
//     <div className="p-5 flex items-center justify-center gap-3">
//       {/* CountDisplay và CountNum ko liên quan đến nhau nhưng nhờ sử dụng Context mà 2 thằng có thể kết nối và nút button có thể làm tăng giá trị cho thằng CountDisplay */}
//       <CountProvider>
//         <CountDisplay></CountDisplay>
//         <CounterNum></CounterNum>
//       </CountProvider>
//     </div>
//   );
// }

//ví dụ 2

// function App() {
//   return (
//     <>
//       <AuthProvider>
//         <GalleryProvider>
//           <HeaderMain></HeaderMain>
//           <PhotoList></PhotoList>
//           <CartList></CartList>
//         </GalleryProvider>
//       </AuthProvider>
//     </>
//   );
// }
//================================= ROUTER==========================//
//slug : css cơ bản -> css-co-ban
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetail></BlogPageDetail>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>

        <Route path="*" element={<>this is 404 page</>}></Route>
      </Routes>
    </div>
  );
}
export default App;
