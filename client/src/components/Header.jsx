import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaDribbble, FaRss, FaLinkedinIn, FaEnvelope, FaPhone, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const toggleMobileSubmenu = (menu) => {
    setExpandedMobileMenu(expandedMobileMenu === menu ? null : menu);
  };

  const isDescendantActive = (paths) => paths.some(p => location.pathname.startsWith(p) || location.pathname === p);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper classes for NavLink styling
  const navLinkClass = ({ isActive }) => 
    `hover:text-[#00a65a] transition-colors py-6 ${isActive ? 'text-[#00a65a]' : ''}`;
    
  const dropdownLinkClass = ({ isActive }) => 
    `block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#00a65a] border-b border-gray-100 capitalize ${isActive ? 'text-[#00a65a] bg-gray-50' : ''}`;

  const mobileLinkClass = ({ isActive }) => 
    `block px-6 py-4 border-b border-gray-50 font-semibold ${isActive ? 'text-[#00a65a]' : 'text-gray-800'}`;
    
  const mobileSubLinkClass = ({ isActive }) => 
    `block px-10 py-3 border-b border-gray-50 text-sm ${isActive ? 'text-[#00a65a] font-semibold' : 'text-gray-600'}`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-0' : 'bg-white py-2'}`}>
      {/* Top Bar - Green */}
      <div className="bg-[#00a65a] text-white py-2 text-sm border-b border-[#00a65a]/30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center">
          <div className="flex justify-center items-center space-x-4 mb-2 md:mb-0">
            <span className="font-semibold text-xs tracking-wider">Follow Us On:</span>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-gray-200 transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-200 transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-200 transition-colors"><FaGooglePlusG /></a>
              <a href="#" className="hover:text-gray-200 transition-colors"><FaDribbble /></a>
              <a href="#" className="hover:text-gray-200 transition-colors"><FaRss /></a>
              <a href="#" className="hover:text-gray-200 transition-colors"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-xs font-semibold tracking-wider items-center justify-center">
            <a href="mailto:subhadratrust@gmail.com" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
              <FaEnvelope /> <span>Email:subhadratrust@gmail.com</span>
            </a>
            <a href="tel:+91-9439112233" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
              <FaPhone /> <span>Phone: +91-9439112233</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 flex justify-between items-center relative py-2">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="https://www.subhadracharitabletrust.org/img/logo.jpg" 
            alt="Logo" 
            className="h-20 w-auto"
          />
        </Link>
        
        {/* Mobile Donate Button next to Logo */}
        <Link to="/donate" className="lg:hidden bg-[#00a65a] text-white font-bold py-2 px-5 rounded text-sm shadow-sm transition-colors hover:bg-[#008a4a]">
          DONATE
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 uppercase text-[13px] font-bold text-[#333]">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          
          <div className="relative group flex items-center">
            <NavLink to="/about" className={({ isActive }) => `flex items-center space-x-1 hover:text-[#00a65a] transition-colors py-6 ${isActive || location.pathname.startsWith('/about/') || location.pathname === '/annual-reports' || location.pathname === '/career' ? 'text-[#00a65a]' : ''}`}>
              <span>About</span> <FaChevronDown className="text-[10px]" />
            </NavLink>
            <div className="absolute top-full left-0 w-48 bg-white shadow-lg border-t-2 border-[#00a65a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <NavLink to="/about/our-team" className={dropdownLinkClass}>Our Team</NavLink>
              <NavLink to="/about/our-history" className={dropdownLinkClass}>Our History</NavLink>
              <NavLink to="/about/sponsor-partner" className={dropdownLinkClass}>Our Sponsor & Partner</NavLink>
              <NavLink to="/annual-reports" className={dropdownLinkClass}>Annual Reports</NavLink>
              <NavLink to="/career" className={dropdownLinkClass}>Career</NavLink>
            </div>
          </div>

          <div className="relative group">
            <button className={`flex items-center space-x-1 hover:text-[#00a65a] transition-colors py-6 ${isDescendantActive(['/wings', '/opttri', '/nimer', '/knowledge', '/training', '/public-associate']) ? 'text-[#00a65a]' : ''}`}>
              <span>Our Wings & Association</span> <FaChevronDown className="text-[10px]" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white shadow-lg border-t-2 border-[#00a65a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <NavLink to="/wings/cohen-school" className={dropdownLinkClass}>Cohen International School</NavLink>
              <NavLink to="/wings/vidwan-classes" className={dropdownLinkClass}>Vidwan Classes</NavLink>
              <NavLink to="/wings/science-movement" className={dropdownLinkClass}>Science Movement</NavLink>
              <NavLink to="/opttri" className={dropdownLinkClass}>Odisha Primary Teacher’s Training</NavLink>
              <NavLink to="/nimer" className={dropdownLinkClass}>NIMER</NavLink>
              <NavLink to="/knowledge" className={dropdownLinkClass}>Knowledge Associate</NavLink>
              <NavLink to="/training" className={dropdownLinkClass}>Training Associate</NavLink>
              <NavLink to="/public-associate" className={dropdownLinkClass}>Publication Associate</NavLink>
            </div>
          </div>

          <div className="relative group">
            <button className={`flex items-center space-x-1 hover:text-[#00a65a] transition-colors py-6 ${isDescendantActive(['/what-we-do', '/impact']) ? 'text-[#00a65a]' : ''}`}>
              <span>What We Do</span> <FaChevronDown className="text-[10px]" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white shadow-lg border-t-2 border-[#00a65a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <NavLink to="/what-we-do/holistic-care" className={dropdownLinkClass}>Holistic Care for Children</NavLink>
              <NavLink to="/what-we-do/health-nutrition" className={dropdownLinkClass}>Health & Nutrition Causes</NavLink>
              <NavLink to="/what-we-do/livelihood" className={dropdownLinkClass}>Livelihood & Capacity Building</NavLink>
              <NavLink to="/what-we-do/skill" className={dropdownLinkClass}>Skill & Entrepreneurship</NavLink>
              <NavLink to="/impact" className={dropdownLinkClass}>Impact Stories</NavLink>
            </div>
          </div>

          <div className="relative group">
            <button className={`flex items-center space-x-1 hover:text-[#00a65a] transition-colors py-6 ${isDescendantActive(['/campaigns', '/volunteer']) ? 'text-[#00a65a]' : ''}`}>
              <span>Get Involved</span> <FaChevronDown className="text-[10px]" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-white shadow-lg border-t-2 border-[#00a65a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <NavLink to="/campaigns" className={dropdownLinkClass}>Campaigns</NavLink>
              <NavLink to="/volunteer" className={dropdownLinkClass}>Volunteer</NavLink>
            </div>
          </div>

          <NavLink to="/gallery" className={navLinkClass}>
            Gallery
          </NavLink>
          <NavLink to="/contact-us" className={navLinkClass}>
            Contact Us
          </NavLink>
          
          <Link to="/donate" className="bg-[#00a65a] hover:bg-[#008a4a] text-white font-bold py-2.5 px-6 rounded transition-colors ml-4 shadow-sm hover:shadow-md">
            Donate
          </Link>
        </nav>

      </div>

      {/* Mobile Menu Toggle Bar */}
      <div className="lg:hidden w-full bg-[#4d4d4d] flex justify-between items-center px-4 py-3 text-white cursor-pointer" onClick={toggleMobileMenu}>
        <span className="font-bold text-xl tracking-wider">MENU</span>
        <button className="text-2xl" aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 lg:hidden flex flex-col max-h-[85vh] overflow-y-auto z-50 pb-4">
            <NavLink to="/" className={mobileLinkClass} onClick={toggleMobileMenu}>Home</NavLink>
            
            {/* About Accordion */}
            <div>
              <button 
                className={`w-full text-left px-6 py-4 border-b border-gray-50 font-semibold flex justify-between items-center ${isDescendantActive(['/about', '/annual-reports', '/career']) ? 'text-[#00a65a]' : 'text-gray-800'}`}
                onClick={() => toggleMobileSubmenu('about')}
              >
                <span>About</span>
                <FaChevronDown className={`transition-transform duration-300 ${expandedMobileMenu === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMobileMenu === 'about' && (
                <div className="bg-gray-50/50 flex flex-col">
                  <NavLink to="/about" end className={mobileSubLinkClass} onClick={toggleMobileMenu}>About Us</NavLink>
                  <NavLink to="/about/our-team" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Our Team</NavLink>
                  <NavLink to="/about/our-history" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Our History</NavLink>
                  <NavLink to="/about/sponsor-partner" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Our Sponsor & Partner</NavLink>
                  <NavLink to="/annual-reports" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Annual Reports</NavLink>
                  <NavLink to="/career" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Career</NavLink>
                </div>
              )}
            </div>

            {/* Our Wings Accordion */}
            <div>
              <button 
                className={`w-full text-left px-6 py-4 border-b border-gray-50 font-semibold flex justify-between items-center ${isDescendantActive(['/wings', '/opttri', '/nimer', '/knowledge', '/training', '/public-associate']) ? 'text-[#00a65a]' : 'text-gray-800'}`}
                onClick={() => toggleMobileSubmenu('wings')}
              >
                <span>Our Wings & Association</span>
                <FaChevronDown className={`transition-transform duration-300 ${expandedMobileMenu === 'wings' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMobileMenu === 'wings' && (
                <div className="bg-gray-50/50 flex flex-col">
                  <NavLink to="/wings/cohen-school" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Cohen International School</NavLink>
                  <NavLink to="/wings/vidwan-classes" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Vidwan Classes</NavLink>
                  <NavLink to="/wings/science-movement" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Science Movement</NavLink>
                  <NavLink to="/opttri" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Odisha Primary Teacher’s Training</NavLink>
                  <NavLink to="/nimer" className={mobileSubLinkClass} onClick={toggleMobileMenu}>NIMER</NavLink>
                  <NavLink to="/knowledge" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Knowledge Associate</NavLink>
                  <NavLink to="/training" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Training Associate</NavLink>
                  <NavLink to="/public-associate" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Publication Associate</NavLink>
                </div>
              )}
            </div>
            
            {/* What We Do Accordion */}
            <div>
              <button 
                className={`w-full text-left px-6 py-4 border-b border-gray-50 font-semibold flex justify-between items-center ${isDescendantActive(['/what-we-do', '/impact']) ? 'text-[#00a65a]' : 'text-gray-800'}`}
                onClick={() => toggleMobileSubmenu('what-we-do')}
              >
                <span>What We Do</span>
                <FaChevronDown className={`transition-transform duration-300 ${expandedMobileMenu === 'what-we-do' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMobileMenu === 'what-we-do' && (
                <div className="bg-gray-50/50 flex flex-col">
                  <NavLink to="/what-we-do/holistic-care" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Holistic Care for Children</NavLink>
                  <NavLink to="/what-we-do/health-nutrition" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Health & Nutrition Causes</NavLink>
                  <NavLink to="/what-we-do/livelihood" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Livelihood & Capacity Building</NavLink>
                  <NavLink to="/what-we-do/skill" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Skill & Entrepreneurship</NavLink>
                  <NavLink to="/impact" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Impact Stories</NavLink>
                </div>
              )}
            </div>

            {/* Get Involved Accordion */}
            <div>
              <button 
                className={`w-full text-left px-6 py-4 border-b border-gray-50 font-semibold flex justify-between items-center ${isDescendantActive(['/campaigns', '/volunteer']) ? 'text-[#00a65a]' : 'text-gray-800'}`}
                onClick={() => toggleMobileSubmenu('get-involved')}
              >
                <span>Get Involved</span>
                <FaChevronDown className={`transition-transform duration-300 ${expandedMobileMenu === 'get-involved' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMobileMenu === 'get-involved' && (
                <div className="bg-gray-50/50 flex flex-col">
                  <NavLink to="/campaigns" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Campaigns</NavLink>
                  <NavLink to="/volunteer" className={mobileSubLinkClass} onClick={toggleMobileMenu}>Volunteer</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/gallery" className={mobileLinkClass} onClick={toggleMobileMenu}>Gallery</NavLink>
            <NavLink to="/contact-us" className={mobileLinkClass} onClick={toggleMobileMenu}>Contact Us</NavLink>
            
            {/* Mobile Donate Button */}
            <div className="px-6 mt-6">
              <Link to="/donate" className="block text-center bg-[#00a65a] hover:bg-[#008a4a] text-white font-bold py-3 px-6 rounded transition-colors shadow-sm" onClick={toggleMobileMenu}>
                Donate Now
              </Link>
            </div>
          </div>
        )}
    </header>
  );
};

export default Header;
