import { useLoaderData } from "react-router-dom";
import Title from "../Title/Title";
import Review from "../Review/Review";

const Reviews = () => {
    const user = useLoaderData()
  Title("Reviews");
  return (
    <div>
      <div className="bg-[#9538E2] py-8">
        <div className="space-y-2 text-center w-1/2 mx-auto">
          <h1 className="text-4xl text-white font-bold">Reviews</h1>
          <p className="text-sm text-slate-300">
            See our customer review based on their personal opinion.
          </p>
        </div>
        </div>

    {/* review section */}
        <div className="space-y-4 w-11/12 mx-auto py-6">
            {
                user.map(item => <Review item={item} key={item.id}></Review>)
            }
        </div>
     
    </div>
  );
};

export default Reviews;
