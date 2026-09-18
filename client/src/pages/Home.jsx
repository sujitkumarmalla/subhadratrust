import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const heroImages = [
  '/img/poor_child_3.jpg',
  '/img/poor_child.jpg',
  '/img/poor_child_5.jpg',
  '/img/child_donation.jpg'
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-smooth min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-odisha-navy">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
          {heroImages.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt="Subhadra Charitable Trust Activity" 
              className={`absolute inset-0 w-full h-full object-cover object-center scale-110 [animation:pan-image_30s_ease-in-out_infinite_alternate] transition-all duration-1000 ease-in-out ${index === currentImage ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}
            />
          ))}
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 mt-16">
          <div className="glass-dark zigzag-card px-10 rounded-xl animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg">
              Empowering Minds, <br/><span className="text-odisha-secondary">Uplifting Society</span>
            </h2>
            <p className="text-xl text-white/90 mb-10 drop-shadow-md max-w-2xl mx-auto">
              Subhadra Charitable Trust is dedicated to fostering education, research, and holistic development across Odisha with deep-rooted cultural values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/campaigns" className="bg-odisha-secondary hover:bg-odisha-secondary-dark text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:scale-105">
                Support Our Campaigns
              </Link>
              <Link to="/volunteer" className="bg-white hover:bg-gray-100 text-odisha-navy font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:scale-105">
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Impact Banner */}
      <div className="bg-odisha-primary py-8 relative z-30 shadow-2xl -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl animate-fade-in-up delay-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 text-white text-center">
          <div>
            <h3 className="text-4xl font-bold text-odisha-secondary mb-1">5,000+</h3>
            <p className="text-sm uppercase tracking-wider font-semibold">Students Educated</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/20"></div>
          <div>
            <h3 className="text-4xl font-bold text-odisha-secondary mb-1">10,000+</h3>
            <p className="text-sm uppercase tracking-wider font-semibold">Meals Served</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/20"></div>
          <div>
            <h3 className="text-4xl font-bold text-odisha-secondary mb-1">50+</h3>
            <p className="text-sm uppercase tracking-wider font-semibold">Health Camps</p>
          </div>
        </div>
      </div>

      {/* Featured Wings Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-odisha-navy relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-16 after:bg-odisha-primary after:rounded-full">
              Our Wings & Association
            </h2>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Discover the diverse educational and social initiatives driven by the Subhadra Charitable Trust to build a brighter future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Wing 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-odisha-secondary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              <img src="/img/poor_child_8.jpg" alt="Cohen International School" className="h-48 w-full object-cover border-b-2 border-odisha-secondary" />
              <div className="p-6">
                <h3 className="text-xl font-serif text-odisha-navy mb-3">Cohen International School</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">Providing world-class education with a focus on holistic student development and academic excellence.</p>
                <Link to="#" className="inline-flex items-center text-odisha-primary font-semibold hover:text-odisha-navy transition-colors group-hover:gap-2">
                  Learn More <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Wing 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-odisha-secondary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              <img src="/img/rural_school.jpg" alt="Vidwan Publications" className="h-48 w-full object-cover border-b-2 border-odisha-secondary" />
              <div className="p-6">
                <h3 className="text-xl font-serif text-odisha-navy mb-3">Publication Associate</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">Publishing high-quality educational materials and books to support learning across levels.</p>
                <Link to="/public-associate" className="inline-flex items-center text-odisha-primary font-semibold hover:text-odisha-navy transition-colors group-hover:gap-2">
                  Learn More <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Wing 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-odisha-secondary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              <img src="/img/poor_child.jpg" alt="Vidwan Classes" className="h-48 w-full object-cover border-b-2 border-odisha-secondary" />
              <div className="p-6">
                <h3 className="text-xl font-serif text-odisha-navy mb-3">Vidwan Classes</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">Premier coaching and guidance for students aiming to excel in competitive examinations.</p>
                <Link to="#" className="inline-flex items-center text-odisha-primary font-semibold hover:text-odisha-navy transition-colors group-hover:gap-2">
                  Learn More <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Wing 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-odisha-secondary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              <img src="/img/poor_child_7.jpg" alt="Science Movement" className="h-48 w-full object-cover border-b-2 border-odisha-secondary" />
              <div className="p-6">
                <h3 className="text-xl font-serif text-odisha-navy mb-3">Science Movement</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">Fostering scientific temper and curiosity among the youth through interactive programs.</p>
                <Link to="#" className="inline-flex items-center text-odisha-primary font-semibold hover:text-odisha-navy transition-colors group-hover:gap-2">
                  Learn More <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 1. Our Mission Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-odisha-primary rounded-3xl transform translate-x-4 translate-y-4 opacity-50"></div>
                <img src="/img/poor_child_2.jpg" alt="Children learning" className="relative z-10 rounded-3xl shadow-xl w-full object-cover h-[400px]" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-odisha-secondary font-bold tracking-wider uppercase mb-2">Who We Are</h4>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6">Transforming Lives Through Education</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Subhadra Charitable Trust, we believe that education is the most powerful weapon which you can use to change the world. Our mission is to eradicate illiteracy and provide holistic support to marginalized communities in rural Odisha.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-8 h-8 rounded-full bg-odisha-primary/20 text-odisha-primary flex items-center justify-center mr-4">✓</span>
                  Free education for rural children
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-8 h-8 rounded-full bg-odisha-primary/20 text-odisha-primary flex items-center justify-center mr-4">✓</span>
                  Nutritious mid-day meals
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-8 h-8 rounded-full bg-odisha-primary/20 text-odisha-primary flex items-center justify-center mr-4">✓</span>
                  Women empowerment programs
                </li>
              </ul>
              <Link to="/about" className="inline-block border-2 border-odisha-navy text-odisha-navy hover:bg-odisha-navy hover:text-white font-bold py-3 px-8 rounded-full transition-colors">
                Read Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Urgent Causes Section */}
      <section className="py-20 px-4 bg-gray-50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-odisha-navy relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-16 after:bg-odisha-primary after:rounded-full">
              Urgent Causes Need Your Help
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cause 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="relative h-56 overflow-hidden">
                <img src="/img/poor_child_1.jpg" alt="Cause" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-odisha-secondary text-white text-xs font-bold px-3 py-1 rounded-full">URGENT</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-odisha-navy font-bold mb-3">Educate a Child for a Year</h3>
                <p className="text-gray-600 text-sm mb-6">Provide tuition, books, and uniforms to a child in need.</p>
                <div className="mb-2 flex justify-between text-sm font-semibold">
                  <span className="text-odisha-primary">₹320,000 Raised</span>
                  <span className="text-gray-500">Goal: ₹500,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div className="bg-odisha-primary h-2 rounded-full" style={{ width: '64%' }}></div>
                </div>
                <Link to="/campaigns" className="block w-full text-center bg-odisha-navy hover:bg-odisha-secondary text-white font-bold py-3 px-4 rounded-xl transition-colors">
                  Donate Now
                </Link>
              </div>
            </div>
            {/* Cause 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="relative h-56 overflow-hidden">
                <img src="/img/poor_child_6.jpg" alt="Cause" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-odisha-navy font-bold mb-3">Nutritious Meals Program</h3>
                <p className="text-gray-600 text-sm mb-6">Ensure that no child goes to school hungry by supporting our mid-day meal initiative.</p>
                <div className="mb-2 flex justify-between text-sm font-semibold">
                  <span className="text-odisha-primary">₹80,000 Raised</span>
                  <span className="text-gray-500">Goal: ₹300,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div className="bg-odisha-primary h-2 rounded-full" style={{ width: '26%' }}></div>
                </div>
                <Link to="/campaigns" className="block w-full text-center bg-odisha-navy hover:bg-odisha-secondary text-white font-bold py-3 px-4 rounded-xl transition-colors">
                  Donate Now
                </Link>
              </div>
            </div>
            {/* Cause 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="relative h-56 overflow-hidden">
                <img src="/img/poor_child_4.jpg" alt="Cause" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-odisha-navy font-bold mb-3">School Infrastructure Setup</h3>
                <p className="text-gray-600 text-sm mb-6">Help us build better classrooms, libraries, and science labs in rural areas.</p>
                <div className="mb-2 flex justify-between text-sm font-semibold">
                  <span className="text-odisha-primary">₹150,000 Raised</span>
                  <span className="text-gray-500">Goal: ₹800,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div className="bg-odisha-primary h-2 rounded-full" style={{ width: '18%' }}></div>
                </div>
                <Link to="/campaigns" className="block w-full text-center bg-odisha-navy hover:bg-odisha-secondary text-white font-bold py-3 px-4 rounded-xl transition-colors">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA Volunteer Section */}
      <section className="relative py-24 bg-odisha-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/charity_team.jpg" alt="Volunteers" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Be the Change You Wish to See</h2>
          <p className="text-xl text-white/80 mb-10">
            Join our dedicated team of volunteers and make a tangible impact in the lives of thousands of children in Odisha.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer" className="bg-odisha-secondary hover:bg-odisha-secondary-dark text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all hover:scale-105 text-lg">
              Join as Volunteer
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-odisha-navy text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
