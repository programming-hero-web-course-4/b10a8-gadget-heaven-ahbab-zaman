const Footer = () => {
  return (
    <div className="py-12 bg-slate-100">
      <div className="text-center spacey-3">
      <h3 className="text-xl font-semibold">Gadget Heaven</h3>
      <p className="text-sm text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="border w-11/12 mx-auto my-6"></div>
      <div className="flex justify-between items-center w-3/4 mx-auto mt-6">
        <div>
        <h4 className="font-semibold">Services</h4>
        <p className="text-gray-400 text-sm font-extralight">Product Support</p>
        <p className="text-gray-400 text-sm font-extralight">Order Tracking</p>
        <p className="text-gray-400 text-sm font-extralight">Shipping & Delivery</p>
        <p className="text-gray-400 text-sm font-extralight">Returns</p>
        
        </div>
        <div>
        <h4 className="font-semibold">Company</h4>
        <p className="text-gray-400 text-sm font-extralight">About Us</p>
        <p className="text-gray-400 text-sm font-extralight">Careers</p>
        <p className="text-gray-400 text-sm font-extralight">Contact</p>
        </div>
        <div>
        <h4 className="font-semibold">Legal</h4>
        <p className="text-gray-400 text-sm font-extralight">Terms & Services</p>
        <p className="text-gray-400 text-sm font-extralight">Privacy Policy</p>
        <p className="text-gray-400 text-sm font-extralight">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
