import { SlUserFollowing } from "react-icons/sl";

const Review = ({ item }) => {
  console.log(item);
  const { product_title, product_image, rating,
    specification } = item;
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product_image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">{product_title}</h1>
            <p className="py-4 text-gray-500"><span className="text-black text-lg font-semibold">Customer Review</span>: I recently bought the  and I am absolutely thrilled with its performance. The design is sleek, and it feels premium right out of the box. The {
                specification.map(spec => <span>{spec},</span>)
                } is outstanding—it's exactly what I was hoping for! Setting it up was super simple, and it's packed with features that make my day-to-day tasks so much easier. For anyone who's on the fence, I'd definitely recommend giving it a try. It's worth every penny!"</p>
           <p className="text-gray-500"><span className="text-black text-lg font-semibold">Rating</span>: {rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
