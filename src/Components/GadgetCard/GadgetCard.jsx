import { Link } from "react-router-dom";

const GadgetCard = ({gadget}) => {
    const {product_title, price, product_image,product_id} = gadget;
    return (
        <div className="border rounded-xl bg-slate-100 space-y-2 p-4">
           <img className="h-[200px] w-[90%] mx-auto p-2" src={product_image} alt="Gadgets" /> 
           <h4 className="text-lg font-semibold">{product_title}</h4>
           <p className="text-sm text-gray-500  font-semibold">Price:$ {price}</p>
           <Link to={`/details/${product_id}`} className="px-3 py-1 rounded-full border border-blue-400 text-sm text-blue-400 font-bold hover:bg-blue-400 hover:text-white hover:transition-colors hover:duration-500">View Details</Link>
        </div>
    );
};

export default GadgetCard;