import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
  return <div></div>;
};

export default withLoading(
  FetchingData,
  "https://hn.algolia.com/api/v1/search?query=react"
);
