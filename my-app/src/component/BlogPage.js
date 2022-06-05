import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("🚀 ~ BlogPage ~ searchParams", searchParams.get("search")); //search là cái key dùng để nhập vào thanh địa chỉ tìm kiếm
  useEffect(() => {
    setSearchParams({
      search: "khaile",
    });
  }, []);
  return <div>Blog page</div>;
};

export default BlogPage;
