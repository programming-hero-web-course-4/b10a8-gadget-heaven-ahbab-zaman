import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
// import GadgetsCards from "../GadgetsCards/GadgetsCards";
const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      {/* Banner section */}
      <div className="bg-[#9538E2] py-8 pb-32">
        <div className="space-y-2 text-center w-1/2 mx-auto">
          <h1 className="text-4xl text-white font-bold">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-sm text-slate-300">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="bg-white px-4 py-2 rounded-full text-[#9538E2] text-sm font-bold ">
            Shop Now
          </button>
        </div>
      </div>

        <Banner></Banner>
        {/* Products cards section */}
        <div className="my-12 space-y-6">
          <h1 className="text-4xl text-center font-bold">
            Explore Our Gadgets
          </h1>

          <div className="w-11/12 mx-auto flex space-x-6">
            <div className="w-1/4">
              <Categories categories={categories}></Categories>
            </div>
            <div className="w-3/4">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
