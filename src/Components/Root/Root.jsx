import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLoaderData } from "react-router-dom";
import { createContext, useState } from "react";
export const AddNumber = createContext(0);
export const AddFavorite = createContext(0);
const Root = () => {
  const [number, setNumber] = useState(0);
  const [favorite, setFavorite] = useState(0);
  return (
      <AddFavorite.Provider value={[favorite, setFavorite]}>
        <AddNumber.Provider value={[number, setNumber]}>
          <div className="font-roboto">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-288px)]">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
          </div>
          
        </AddNumber.Provider>
      </AddFavorite.Provider>
  );
};

export default Root;
