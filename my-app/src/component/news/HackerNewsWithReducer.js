import React, { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";

const HackerNewsWithReducer = () => {
  const initialState = {
    hits: "",
    query: "",
    loading: true,
    url: `https://hn.algolia.com/api/v1/search?query=''`,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DATA": {
        return { ...state, hits: action.payload }; //state lúc này đang là initialState và ...state để cập nhật các giá trị trước đó vô mảng mới và cập nhật cái payload được dispatch lên
      }
      case "SET_LOADING": {
        return { ...state, loading: action.payload };
      }
      case "SET_QUERY": {
        return { ...state, query: action.payload };
      }
      case "SET_URL": {
        return { ...state, url: action.payload };
      }
      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });

    try {
      const response = await axios.get(state.url);
      // console.table(response.data?.hits);
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch {
      throw new Error("something happend with api");
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);

  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md transition-all text-black focus:border-blue"
          defaultValue={state.value}
          placeholder="Typing your keyword..."
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
        />
        <button
          className="bg-blue-500 text-white font-semibold-300 rounded-md p-5 flex-shrink-0"
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full border-r-4 border-4 border-blue-600 border-r-transparent animate-spin mx-auto my-10 "></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
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

export default HackerNewsWithReducer;
