import Banner from "../Banner/Banner";
const Home = () => {
    return (
      <div>
          <div className="bg-[#9538E2] py-8 pb-32">
           <div className="space-y-2 text-center w-1/2 mx-auto">
           <h1 className="text-4xl text-white font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className="text-sm text-slate-300">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className="bg-white px-4 py-2 rounded-full text-[#9538E2] text-sm font-bold ">Shop Now</button>
           </div>
        </div>

       <Banner></Banner>
      </div>
    );
};

export default Home;