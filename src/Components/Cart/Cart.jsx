import { useContext, useEffect, useState } from "react";
import { getCarts } from "../../Utilities/Utilities";
import CartList from "../CartList/CartList";

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cartList = getCarts();
    setCart(cartList);
  }, []);

  const handleSort = (sortBy) => {
    if (sortBy === "price") {
      const sortedCart = [...cart].sort((a, b) => b.price - a.price);
      setCart(sortedCart);
    }
  };

  const handlePurchase = () => {};

  return (
    <div>
      <div className="w-11/12 mx-auto my-8 flex justify-between">
        <h4 className="text-2xl font-semibold">Cart</h4>
        <div className="flex items-center gap-4">
          <h4 className="text-lg font-semibold">Total price :</h4>
          <button
            onClick={() => handleSort("price")}
            className="px-4 py-2 bg-blue-500 rounded-full text-white font-semibold border hover:bg-white hover:text-blue-500 hover:transition-colors hover:duration-300"
          >
            Sort by price
          </button>
          <button
           onClick={() => document.getElementById("my_modal_1").showModal()}
            className="px-4 py-2 bg-blue-500 rounded-full text-white font-semibold hover:bg-white hover:text-blue-500 hover:transition-colors hover:duration-300"
          >
            Purchase
          </button>
          
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box text-center">
            <img className="mx-auto" src="./assets/Group.png" alt="" />
              <p className="text-xl font-bold py-3">
                Payment Successfully 
              </p>
              <div className="border"></div>
              <p className="text-gray-500 py-3">Thanks for purchasing</p>
              <p className="text-gray-500 py-3">Total cost : </p>
              <div className="modal-action">
                <form className="w-full" method="dialog">
                  <button className="btn w-full">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      <div>
        {cart.map((item) => (
          <CartList item={item}></CartList>
        ))}
      </div>
    </div>
  );
};

export default Cart;
