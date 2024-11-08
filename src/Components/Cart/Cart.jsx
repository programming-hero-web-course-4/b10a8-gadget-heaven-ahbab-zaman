import { useContext, useEffect, useState } from "react";
import { getCarts } from "../../Utilities/Utilities";
import CartList from "../CartList/CartList";
import { useLoaderData } from "react-router-dom";
import { SetCartCost } from "../Root/Root";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [cost, setCost] = useContext(SetCartCost);
  useEffect(() => {
    const cartList = getCarts();
    setCart(cartList);
  }, []);
  
  const handleSort = (sortBy) => {
        if(sortBy === 'price'){
            const sortedCart = [...cart].sort((a, b)=> b.price - a.price);
            setCart(sortedCart)
        }
  }

  return (
    <div>
      <div className="w-11/12 mx-auto my-8 flex justify-between">
        <h4 className="text-2xl font-semibold">Cart</h4>
        <div className="flex items-center gap-4">
          <h4 className="text-lg font-semibold">
            Total price : {setCost(cost + cart.price)}
          </h4>
          <button onClick={() => handleSort('price')} className="px-4 py-2 bg-blue-500 rounded-full text-white font-semibold border hover:bg-white hover:text-blue-500 hover:transition-colors hover:duration-300">
            Sort by price 
          </button>
          <button className="px-4 py-2 bg-blue-500 rounded-full text-white font-semibold hover:bg-white hover:text-blue-500 hover:transition-colors hover:duration-300">
            Purchase
          </button>
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
