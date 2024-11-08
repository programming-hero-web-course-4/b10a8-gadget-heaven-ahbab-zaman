import { NavLink, Outlet, useLoaderData, useParams } from "react-router-dom";
import Title from "../Title/Title";

const Dashboard = () => {
  const data = useLoaderData();

  Title("Dashboard");
  return (
    <div>
      <div className="bg-[#9538E2] py-8">
        <div className="space-y-2 text-center w-1/2 mx-auto">
          <h1 className="text-4xl text-white font-bold">Dashboard</h1>
          <p className="text-sm text-slate-300">
            Explore the dashboard to purchase our latest products
          </p>
        </div>

        <div className="flex justify-center items-center gap-12 mt-8">
         <button>
         <NavLink className={({isActive})=>`px-6 py-2 rounded-full text-xl font-bold ${isActive ? "bg-white text-[#9538E2]" : "bg-transparent border text-white"}`} to="/dashboard/cart">Cart</NavLink>
         </button>
          <NavLink className={({isActive})=>`px-6 py-2 rounded-full font-bold  ${isActive ? "bg-white text-[#9538E2]" : "bg-transparent border text-white"}`} to="/dashboard/wishlist">
            <button>Wishlist</button>
          </NavLink>
        </div>
      </div>
        <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
