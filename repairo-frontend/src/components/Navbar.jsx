import { MapPin, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold text-repairoBlue tracking-tight">REPAIRO</Link>
        <div className="hidden md:flex gap-6 text-gray-600 font-medium">
          <span>Homes</span>
          <span>Native</span>
          <span>Beauty</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg text-sm border">
          <MapPin size={16} className="text-repairoBlue mr-2" />
          <select className="bg-transparent outline-none font-medium">
            <option>Deccan Gymkhana, Pune</option>
          </select>
        </div>
        
        <div className="relative flex items-center">
          <Search size={18} className="absolute left-3 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for 'Kitchen cleaning'"
            className="pl-10 pr-4 py-2 bg-white border rounded-lg w-64 focus:ring-2 ring-blue-100 outline-none"
          />
        </div>

        <ShoppingCart className="text-gray-700 cursor-pointer" />
        <Link to="/login"><User className="text-gray-700 cursor-pointer" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;