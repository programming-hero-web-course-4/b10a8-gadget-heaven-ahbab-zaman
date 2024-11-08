const CartList = ({ item }) => {
  const { product_title, product_image, description, price } = item;
  return (
    <div>
     

      <div className="hero my-6">
        <div className="hero-content flex-col lg:flex-row border rounded-xl">
          <img
            src={product_image}
            className="w-[200px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <p className="py-2 text-gray-600 text-sm">{description}</p>
            <p className="text-lg font-semibold">
              Price: <span className="text-gray-600">${price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
