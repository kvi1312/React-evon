import React, { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const GalleryContext = createContext();
const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1652541594278-d7dbc83be9d6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1652717730391-80e9ef30e71f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1652876343954-2dbf517cfa4e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1652821957707-ae78781ec5bf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400",
    isFavorite: false,
  },
];

function GalleryProvider(props) {
  const [storedValue, setValue] = useLocalStorage("photo", fakeData);

  const [photo, setPhoto] = useState(storedValue);
  const [favoriteList, setFavoriteList] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function toggleFavorite(photoId) {
    const updatedArray = photo.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhoto(updatedArray);
    setValue(updatedArray);
  }

  //viet fnc addToCart
  //fn addToCart truyen parm la photo
  // cap nhat lai state gio hang cartItems
  function addToCart(newItem) {
    //// dùng callback để lấy những giá trị cũ rồi dùng spread operator để đưa nó vào danh sách cart cùng với item mới
    setCartItems((previousItem) => {
      const isExist = previousItem.some((item) => item.id === newItem.id); // some kiểm tra trả ra boolean
      console.log("🚀 ~ setCartItems ~ isExist", isExist);
      if (isExist) return [...previousItem];
      return [...previousItem, newItem];
    });
  }

  function removeFromCart(photoId) {
    setCartItems((previousItem) =>
      previousItem.filter((item) => item.id !== photoId)
    );
  }
  const value = {
    photo,
    cartItems,
    favoriteList,
    setPhoto,
    setFavoriteList,
    setCartItems,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };

  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined") {
    throw new Error("useGallery must be used within GalleryProvider");
  }
  return context;
}

export { useGallery, GalleryProvider };
