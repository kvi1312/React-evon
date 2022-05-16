import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
import useHackerNewsAPI from "../../hooks/useHackerNewsAPI";

const HackerNewsWithHook = () => {
  const { loading, setUrl, data } = useHackerNewsAPI(
    `https://hn.algolia.com/api/v1/search?query=''`,
    { hits: [] }
  );
  const [query, setQuery] = useState("");

  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          defaultValue={query}
          className="border border-gray-200 p-5 block w-full rounded-md transition-all text-black focus:border-blue"
          placeholder="Typing your keyword..."
          // onChange={handleUpdateQuery}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={(e) =>
            // onchange ở trên lúc này đã có giá trị cuối được lưu vào query, sau đó dùng setUrl để truyền giá trị query đó vô cái link để get ra data
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold-300 rounded-md p-5 flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-r-4 border-4 border-blue-600 border-r-transparent animate-spin mx-auto my-10 "></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          data.hits.length > 0 &&
          data.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-300 rounded-md">
                {" "}
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithHook;
