import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { PiStarDuotone } from "react-icons/pi";
import { PiStarHalfDuotone } from "react-icons/pi";
import { BsCart4 } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import Title from "../Title/Title";


const GadgetDetails = () => {
  Title("GadgetDetails")
  const details = useLoaderData();
  const params = useParams();


  const findGadget = details.find(
        (item) => item.product_id == params.product_id
    );


    const {
      product_id,
      product_title,
      product_image,
      price,
      description,
      specification,
      availability,
      rating,
    } = findGadget;


const handleCart = id => {
  addToCart(id)
}

const handleFavorite = id => {
  addToFavorite(id)
}
   
 

  return (
    <div>
      <div className="bg-[#9538E2] py-8 pb-16">
        <div className="space-y-2 text-center w-1/2 mx-auto">
          <h1 className="text-4xl text-white font-bold">Product Details</h1>
          <p className="text-sm text-slate-300">
            Explore all the gadgets. To find out the details read the all the
            specifications.
          </p>
          <button className="bg-white px-4 py-2 rounded-full text-[#9538E2] text-sm font-bold ">
            Shop Now
          </button>
        </div>
      </div>
      <div>
        <div className="hero bg-slate-100 shadow-xl rounded-xl w-3/5 mx-auto mb-8 -mt-12">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={product_image}
              className="max-w-sm h-[340px] rounded-lg shadow-2xl"
            />
            <div className="space-y-2">
              <h1 className="text-xl font-bold">{product_title}</h1>
              <p className="text-sm font-bold text-gray-500">
                Price: $ {price}
              </p>
              <div class="badge bg-slate-300">
                {availability ? "In Stock" : "Stock Out"}
              </div>
              <p className="text-sm font-semibold text-gray-500">
                {description}
              </p>
              <div>
                <h4 className="text-lg font-bold">Specification :</h4>
                {specification.map((item) => (
                  <li className="list-decimal text-gray-500 text-sm font-semibold">
                    {item}
                  </li>
                ))}
              </div>
              <div>
                <span className="text-lg font-bold flex items-center gap-2">
                  Rating <FcRating></FcRating>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <PiStarDuotone></PiStarDuotone>
                </div>
                <div>
                  <PiStarDuotone></PiStarDuotone>
                </div>
                <div>
                  <PiStarDuotone></PiStarDuotone>
                </div>
                <div>
                  <PiStarDuotone></PiStarDuotone>
                </div>
                <div>
                  <PiStarHalfDuotone></PiStarHalfDuotone>
                </div>
                <h4 className="text-sm font-semibold bg-slate-300 rounded-3xl px-[10px] py-[5px]">
                  {rating}
                </h4>
              </div>
              <div className="flex items-center gap-4">
          <button onClick={()=>handleCart(findGadget) } className="bg-blue-600 text-white text-sm font-semibold px-3 py-2 rounded-full flex items-center gap-2 hover:bg-blue-200 hover:text-slate-700 hover:transition-colors hover:duration-300">
                  Add To Cart <BsCart4 className="text-xl"></BsCart4>
                </button>
                <button onClick={() => handleFavorite(findGadget)} className="p-2 border-2 rounded-full hover:bg-slate-300 hover:transition-colors hover:duration-300">
                  <GrFavorite className="text-xl"></GrFavorite>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
