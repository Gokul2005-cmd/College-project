import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Weather', path: '/weather' },
    { name: 'Market Price', path: '/market-price' },
    { name: 'Government Schemes', path: '/schemes' },
    { name: 'Crops', path: '/crops' },
    { name: 'Community', path: '/community' },
    { name: 'AI Chatbot', path: '/chatbot' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full m-0 p-0">
      <div className="w-full max-w-full px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer flex-shrink-0">
            <span className="text-3xl">🌾</span>
            <span className="text-xl font-bold text-primary font-serif">
              KrishiSahayak
            </span>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-700 font-medium text-base hover:text-accent transition-colors duration-300 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
              aria-label="Search"
            >
              <Search size={22} />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
              aria-label="Cart"
            >
              <ShoppingCart size={22} />
            </button>
            <button className="flex items-center gap-2 bg-accent hover:bg-primary text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300">
              <User size={18} />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 w-full">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full flex items-center justify-center gap-2 bg-accent text-white px-5 py-3 rounded-lg font-semibold mt-4">
              <User size={18} />
              <span>Login</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;