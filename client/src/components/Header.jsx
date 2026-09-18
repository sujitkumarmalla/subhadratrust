import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaDribbble, FaRss, FaLinkedinIn, FaEnvelope, FaPhone, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-0' : 'bg-white py-2'}`}>
      {/* Top Bar - Cooling UI Blue */}
      <div className="bg-[#102C57] text-white py-2 text-sm border-b border-[#00a65a]/30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <span className="font-semibold text-xs tracking-wider">Follow Us On:</span>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-[#00a65a] transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#00a65a] transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-[#00a65a] transition-colors"><FaGooglePlusG /></a>
              <a href="#" className="hover:text-[#00a65a] transition-colors"><FaDribbble /></a>
              <a href="#" className="hover:text-[#00a65a] transition-colors"><FaRss /></a>
              <a href="#" className="hover:text-[#00a65a] transition-colors"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="flex space-x-6 text-xs font-semibold tracking-wider">
            <a href="mailto:subhadratrust@gmail.com" className="flex items-center space-x-2 hover:text-[#00a65a] transition-colors">
              <FaEnvelope /> <span>Email:subhadratrust@gmail.com</span>
            </a>
            <a href="tel:+91-9439112233" className="flex items-center space-x-2 hover:text-[#00a65a] transition-colors">
              <FaPhone /> <span>Phone: +91-9439112233</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 py-2">
          <img 
            src="https://www.subhadracharitabletrust.org/img/logo.jpg" 
            alt="Logo" 
            className="h-16 w-16"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 uppercase text-[13px] font-bold text-[#333]">
          <Link to="/" className={`hover:text-[#00a65a] transition-colors py-6 ${isActive('/') ? 'text-[#00a65a]' : ''}`}>
            Home
          </Link>
          
          <div className="relative group flex items-center">
            <Link to="/about" className={`flex items-center space-x-1 hover:text-[#00a65a] transition-colors py-6 ${isActive('/about') || location.pathname.startsWith('/about/') ? 'text-[#00a65a]' : ''}`}>
              <span>About</span> <FaChevronDown className="text-[10px]" />
            </Link>
            <div className="absolute top-full left-0 w-48 bg-white shadow-lg border-t-2 border-[#00a65a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link to="/about/our-team" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#00a65a] border-b border-gray-100">Our Team</Link>
              <Link to="/about/our-history" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#00a65a] border-b border-gray-100">Our History</Link>
              <Link to="/about/sponsor-partner" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#00a65a]">Our Sponsor & Partner</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#00a65a] transition-colors py-6">
              <span className={isActive('/public-associate') ? 'text-[#00a65a]' : ''}>Our Wings & Association</span> <FaChevronDown className="text-[10px]" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white shadow-lg border-t-2 border-[#00a65a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link to="/wings/cohen-school" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#00a65a] border-b border-gray-100 capitalize">Cohen International School</Link>
              <Link to="/wings/vidwan-classes" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#00a65a] border-b border-gray-100 capitalize">Vidwan Classes</Link>
              <Link to="/public-associate" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#00a65a] border-b border-gray-100 capitalize">Publication Associate</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#00a65a] transition-colors py-6">
              <span>What We Do</span> <FaChevronDown className="text-[10px]" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white shadow-lg border-t-2 border-[#00a65a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link to="/what-we-do/holistic-care" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#00a65a] border-b border-gray-100 capitalize">Holistic Care for Children</Link>
              <Link to="/what-we-do/health-nutrition" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#00a65a] border-b border-gray-100 capitalize">Health & Nutrition Causes</Link>
              <Link to="/impact" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#00a65a] border-b border-gray-100 capitalize">Impact Stories</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#00a65a] transition-colors py-6">
              <span className={(isActive('/campaigns') || isActive('/volunteer')) ? 'text-[#00a65a]' : ''}>Get Involved</span> <FaChevronDown className="text-[10px]" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-white shadow-lg border-t-2 border-[#00a65a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link to="/campaigns" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#00a65a] border-b border-gray-100">Campaigns</Link>
              <Link to="/volunteer" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#00a65a] border-b border-gray-100">Volunteer</Link>
            </div>
          </div>

          <Link to="/gallery" className="hover:text-[#00a65a] transition-colors py-6">
            Gallery
          </Link>
          <Link to="/contact-us" className="hover:text-[#00a65a] transition-colors py-6">
            Contact Us
          </Link>
          
          <Link to="/donate" className="bg-[#00a65a] hover:bg-[#008a4a] text-white font-bold py-2.5 px-6 rounded transition-colors ml-4 shadow-sm hover:shadow-md">
            Donate
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-2xl text-[#102C57]" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 lg:hidden flex flex-col max-h-[80vh] overflow-y-auto">
            <Link to="/" className="px-6 py-4 border-b border-gray-50 font-semibold" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/about" className="px-6 py-4 border-b border-gray-50 font-semibold" onClick={toggleMobileMenu}>About</Link>
            <Link to="/public-associate" className="px-6 py-4 border-b border-gray-50 font-semibold text-[#00a65a]" onClick={toggleMobileMenu}>Our Wings - Publication Associate</Link>
            <Link to="/what-we-do/holistic-care" className="px-6 py-4 border-b border-gray-50 font-semibold" onClick={toggleMobileMenu}>What We Do</Link>
            <Link to="/impact" className="px-6 py-4 border-b border-gray-50 font-semibold pl-10" onClick={toggleMobileMenu}>Impact Stories</Link>
            <div className="px-6 py-4 border-b border-gray-50 font-semibold text-gray-500">Get Involved</div>
            <Link to="/campaigns" className="px-6 py-4 border-b border-gray-50 font-semibold pl-10" onClick={toggleMobileMenu}>Campaigns</Link>
            <Link to="/volunteer" className="px-6 py-4 border-b border-gray-50 font-semibold pl-10" onClick={toggleMobileMenu}>Volunteer</Link>
            <Link to="/gallery" className="px-6 py-4 border-b border-gray-50 font-semibold" onClick={toggleMobileMenu}>Gallery</Link>
            <Link to="/contact-us" className="px-6 py-4 font-semibold" onClick={toggleMobileMenu}>Contact Us</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
