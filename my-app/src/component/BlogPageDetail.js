import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPageDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  //   console.log("🚀 ~ BlogPageDetail ~ slug", slug);
  return (
    <div>
      Blog page detail
      <button
        onClick={() => navigate("/blog")}
        className="p-3 bg-blue-500 rounded-sm text-white"
      >
        Navigate to blog page
      </button>
    </div>
  );
};

export default BlogPageDetail;
