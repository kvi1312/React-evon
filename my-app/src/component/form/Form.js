import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [select, setSelect] = useState("");
  //   const handleSelect = (e) => {
  //     console.log(e.target.value);
  //     setSelect(e.target.value);
  //   };

  // // set cho INPUT
  // const [values, setValues] = useState({
  //   fullName: "",
  //   email: "",
  //   hobby: false,
  // });
  // const handleInputChange = (e) => {
  //   //  console.log(e.target.type);
  //   const type = e.target.type;
  //   setValues({
  //     ...values,
  //     [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value, //vế bên trái là để truy cập vào prop name của thẻ input
  //   });
  // };
  const { values, handleChange } = useHandleChange({
    fullName: "",
    email: "",
    hobby: false,
  });

  const [nameError, setNameError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.fullName === "") {
      setNameError("Your name field is empty");
    } else {
      setNameError("");
    }
  };
  return (
    <div className="p-5">
      <form className="flex gap-x-3" onSubmit={handleSubmit}>
        {/* {name} */}

        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          {nameError}
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="p-3 rounded-lg border bg-blue-200 font-white-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
