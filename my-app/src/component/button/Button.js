import React from "react";
// import "./Button.scss";
import styles from "./Button.module.css";

//=================== SASS =====================//
// const Button = (props) => {
//   return (
//     <div>
//       <button className={`btn ${props.className || ""}`}>
//         {props.children}
//       </button>
//     </div>
//   );
// };
//=================== CSS MODULE =====================//

const Button = (props) => {
  return (
    <div>
      <button
        className={`${styles.btn} ${props.secondary ? styles.btnSecond : ""}`}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
