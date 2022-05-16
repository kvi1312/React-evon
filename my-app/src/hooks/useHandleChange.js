import React, { useState } from "react";

const useHandleChange = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    values,
    handleChange,
  };
};

export default useHandleChange;
