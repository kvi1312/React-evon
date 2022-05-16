import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const useHackerNewsAPI = (initialURL, initialData) => {
  const [data, setData] = useState(initialData);
  const handleFetchData = useRef({}); //useRef luu cac gia tri ben ngoai compo, o truong hop nay la query
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(initialURL);
  //useREf for hackerNEw
  const isMounted = useRef(true);

  useEffect(() => {
    //
    return () => {
      isMounted.current = false; //khi compo bị unmount thì sẽ là giá trị false
    };
  }, []);

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      // console.table(response.data.hits);

      if (isMounted) {
        setData(response.data || []);
        setLoading(false);
      }
    } catch {
      setLoading(true);
      throw new Error("something happened with api");
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [url]);


  return {
    setUrl,
    loading,
    data,
  };
};

export default useHackerNewsAPI;
