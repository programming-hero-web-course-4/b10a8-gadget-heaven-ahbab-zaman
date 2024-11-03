import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="font-roboto">
     <Navbar></Navbar>
     <div className="min-h-[calc(100vh-288px)]">
     <Outlet></Outlet>
     </div>
     <Footer></Footer>
    </div>
  );
};

export default Root;
