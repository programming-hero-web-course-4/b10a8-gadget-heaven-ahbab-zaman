const GadgetCard = ({gadget}) => {
    const {product_title, price, product_image} = gadget;
    return (
        <div className="border rounded-xl bg-slate-100 space-y-2 p-4">
           <img className="h-[200px] w-[90%] mx-auto p-2" src={product_image} alt="Gadgets" /> 
           <h4 className="text-lg font-semibold">{product_title}</h4>
           <p className="text-sm text-gray-500  font-semibold">Price: {price}</p>
           <button className="px-3 py-1 rounded-full border border-blue-400 text-sm text-blue-400 font-bold">View Details</button>
        </div>
    );
};

export default GadgetCard;