import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-tight text-white">
          MernEats.com
        </Link>
        <div className="text-white font-bold flex gap-4 tracking-tight">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
