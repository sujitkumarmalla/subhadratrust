import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-odisha-navy text-white/80 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us & Newsletter */}
          <div>
            <h4 className="text-odisha-secondary text-lg font-serif mb-2 uppercase">About Us</h4>
            <img src="/img/title-bottom.png" alt="" className="h-2 w-auto mb-6 opacity-80" />
            <p className="mb-8 text-sm leading-relaxed text-gray-300">
              Subhadra Charitable Trust (SCT) is a registered entity founded by a group of social and educational enthusiasts of Odisha.
            </p>
            
            <h4 className="text-odisha-secondary text-lg font-serif mb-2 uppercase">Newsletter</h4>
            <img src="/img/title-bottom.png" alt="" className="h-2 w-auto mb-6 opacity-80" />
            <p className="mb-4 text-sm text-gray-300">Select your newsletters, enter your email address, and click "Subscribe"</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="w-full px-3 py-2 text-gray-900 text-sm focus:outline-none" />
              <button className="bg-odisha-primary hover:bg-[#008c44] px-4 py-2 text-white text-sm font-semibold transition-colors">Subscribe</button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-odisha-secondary text-lg font-serif mb-2 uppercase">Quick Link</h4>
            <img src="/img/title-bottom.png" alt="" className="h-2 w-auto mb-6 opacity-80" />
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/mega" className="hover:text-odisha-primary transition-colors">Our Mega successes</Link></li>
              <li><Link to="/wings/science-movement" className="hover:text-odisha-primary transition-colors">Science Movement</Link></li>
              <li><Link to="/opttri" className="hover:text-odisha-primary transition-colors">Teachers Training</Link></li>
              <li><Link to="/student" className="hover:text-odisha-primary transition-colors">Student awareness program</Link></li>
              <li><Link to="/emergency" className="hover:text-odisha-primary transition-colors">Emergency relief</Link></li>
              <li><Link to="/what-we-do/skill" className="hover:text-odisha-primary transition-colors">Skill & entrepreneurship development</Link></li>
              <li><Link to="/ets" className="hover:text-odisha-primary transition-colors">Environment, Technology & Sustainability</Link></li>
              <li><Link to="/wash" className="hover:text-odisha-primary transition-colors">Water, Sanitation & Hygiene</Link></li>
              <li><Link to="/csr-or-program" className="hover:text-odisha-primary transition-colors">CSR or Program Partnership</Link></li>
            </ul>
          </div>

          {/* Program Highlights */}
          <div>
            <h4 className="text-odisha-secondary text-lg font-serif mb-2 uppercase">Program Highlights</h4>
            <img src="/img/title-bottom.png" alt="" className="h-2 w-auto mb-6 opacity-80" />
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/knowledge" className="hover:text-odisha-primary transition-colors">Knowledge Associate</Link></li>
              <li><Link to="/public-associate" className="hover:text-odisha-primary transition-colors">Publication Associate</Link></li>
              <li><Link to="/training" className="hover:text-odisha-primary transition-colors">Training Associate</Link></li>
              <li><Link to="/wings/science-movement" className="hover:text-odisha-primary transition-colors">Science Movement</Link></li>
              <li><Link to="/opttri" className="hover:text-odisha-primary transition-colors">Teachers Training</Link></li>
              <li><Link to="/annual-reports" className="hover:text-odisha-primary transition-colors">Annual Reports</Link></li>
              <li><Link to="/career" className="hover:text-odisha-primary transition-colors">Career</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-odisha-secondary text-lg font-serif mb-2 uppercase">Contact Details</h4>
            <img src="/img/title-bottom.png" alt="" className="h-2 w-auto mb-6 opacity-80" />
            <div className="space-y-4 text-sm text-gray-300">
              <p className="flex items-start">
                <FaPhone className="text-odisha-secondary mt-1 mr-3 flex-shrink-0" />
                <span>+91-9439112233</span>
              </p>
              <p className="flex items-start">
                <FaMapMarkerAlt className="text-odisha-secondary mt-1 mr-3 flex-shrink-0" />
                <span><strong className="text-white font-medium">Office address:</strong> 308, Mahanee Complex, District Center (Near Axis Bank), Bhubaneswar-751016, Odisha</span>
              </p>
              <p className="flex items-start">
                <FaMapMarkerAlt className="text-odisha-secondary mt-1 mr-3 flex-shrink-0" />
                <span><strong className="text-white font-medium">Registered Address:</strong> Subhadra Charitable Trust, 6th Avenue, Flat No.149, First Floor, Block-6 (Lilly), P.O/P.S- Chandrasekharpur, Bhubaneswar-751016, Khurda, Odisha</span>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="text-odisha-secondary mr-3 flex-shrink-0" />
                <a href="mailto:subhadratrust@gmail.com" className="hover:text-odisha-primary transition-colors">subhadratrust@gmail.com</a>
              </p>
            </div>
            <div className="flex space-x-3 mt-8">
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-odisha-primary transition-colors"><FaFacebookF size={14} /></a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-odisha-primary transition-colors"><FaTwitter size={14} /></a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-odisha-primary transition-colors"><FaLinkedinIn size={14} /></a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-odisha-primary transition-colors"><FaInstagram size={14} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Subhadra Charitable Trust. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
