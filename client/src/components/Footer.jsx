import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-odisha-navy text-white/80 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity">
              <img src="https://www.subhadracharitabletrust.org/img/logo.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="text-white text-lg font-serif">Subhadra</h3>
                <p className="text-odisha-secondary text-xs">CHARITABLE TRUST</p>
              </div>
            </Link>
            <p className="mb-6 text-sm leading-relaxed">
              Dedicated to fostering education, research, and holistic development across Odisha with deep-rooted cultural values.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-odisha-primary transition-colors"><FaFacebookF /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-odisha-primary transition-colors"><FaTwitter /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-odisha-primary transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-odisha-primary transition-colors"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-odisha-secondary text-lg font-serif mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-odisha-primary">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-odisha-secondary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-odisha-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-odisha-secondary transition-colors">Our Wings</a></li>
              <li><a href="#" className="hover:text-odisha-secondary transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-odisha-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Wings */}
          <div>
            <h4 className="text-odisha-secondary text-lg font-serif mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-odisha-primary">Program Highlights</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-odisha-secondary transition-colors">Knowledge Associate</a></li>
              <li><a href="/public-associate" className="hover:text-odisha-secondary transition-colors">Publication Associate</a></li>
              <li><a href="#" className="hover:text-odisha-secondary transition-colors">Training Associate</a></li>
              <li><a href="#" className="hover:text-odisha-secondary transition-colors">Science Movement</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-odisha-secondary text-lg font-serif mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-odisha-primary">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <p className="flex items-start"><FaMapMarkerAlt className="text-odisha-secondary mt-1 mr-3 flex-shrink-0" /> Bhubaneswar, Odisha, India</p>
              <p className="flex items-center"><FaPhone className="text-odisha-secondary mr-3 flex-shrink-0" /> +91-9439112233</p>
              <p className="flex items-center"><FaEnvelope className="text-odisha-secondary mr-3 flex-shrink-0" /> subhadratrust@gmail.com</p>
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
