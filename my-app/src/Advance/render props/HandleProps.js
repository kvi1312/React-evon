import React from "react";

const HandleProps = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        className="border rounded-lg"
        autoFocus={true}
        onChange={(e) => setValue(e.target.value)}
      />
      <DisplayValue value={value}></DisplayValue>
    </div>
  );
};

const DisplayValue = ({ value }) => {
  return <span>{value}</span>;
};
export default HandleProps;
