import React from "react";

function Cart({ image, name}) {
  return (
    <div class="items-center bg-gray-50 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <img src={image} alt={name} />
    </div>
  );
}

export default Cart;
