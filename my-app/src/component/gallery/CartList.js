import React from "react";
import { useGallery } from "../../context/galleryContext";

const CartList = () => {
  const { cartItems, removeFromCart } = useGallery();

  return (
    <div className="py-10 px-5 flex flex-col gap-5 items-start">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div
            className="inline-flex gap-x-5 justify-between items-center"
            key={item.id}
          >
            <img
              src={item.url}
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
            <button
              className="bg-red-500 text-sm text-white rounded-lg p-2"
              onClick={() => removeFromCart(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartList;
