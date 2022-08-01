import React, { useEffect, useState } from "react";

const withLoading = (Component, url) => {
  return (props) => {
    const [news, setNews] = useState([]);
    useEffect(() => {
      async function FetchData() {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setNews(data.hits);
      }
      FetchData();
    }, []);
    if (!news || news.length === 0) {
      return <div>Loading....</div>;
    } else {
      return <Component {...props}></Component>;
    }
  };
};

export default withLoading;
