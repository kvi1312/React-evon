import React, { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [select, setSelect] = useState("");
  //   const handleSelect = (e) => {
  //     console.log(e.target.value);
  //     setSelect(e.target.value);
  //   };

  // set cho INPUT
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    hobby: false,
  });
  const handleInputChange = (e) => {
    //  console.log(e.target.type);
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value, //vế bên trái là để truy cập vào prop name của thẻ input
    });
  };
  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        {/* {name} */}

        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />

        <input type="checkbox" name="hobby" onChange={handleInputChange} />
      </div>
      {/* {select}
      <select name="country" onChange={handleSelect}>
        <option value="vn">VN</option>
        <option value="usa">USA</option>
        <option value="japan">JAPAN</option>
      </select> */}
    </div>
  );
};

export default Form;
