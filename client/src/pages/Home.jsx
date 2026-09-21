import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const heroImages = [
  '/img/banner-1.jpeg',
  '/img/banner-2.jpeg',
  '/img/banner-3.jpg'
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImage]);

  const [causeGroupIndex, setCauseGroupIndex] = useState(0);

  const causeGroups = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 1]
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCauseGroupIndex(prev => (prev + 1) % causeGroups.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-smooth min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative w-full aspect-[2/1] sm:aspect-[21/9] md:aspect-auto md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-white group">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Subhadra Charitable Trust Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-contain md:object-cover object-center transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#00a651] text-white p-3 md:p-4 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#008a43]"
          aria-label="Previous Slide"
        >
          <FaChevronLeft className="text-xl md:text-2xl" />
        </button>
        <button
          onClick={nextImage}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#00a651] text-white p-3 md:p-4 rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#008a43]"
          aria-label="Next Slide"
        >
          <FaChevronRight className="text-xl md:text-2xl" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentImage ? 'bg-[#00a651]' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>


      {/* Quick Impact Banner */}
      <div className="hidden md:block bg-odisha-primary py-8 relative z-30 shadow-2xl -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl animate-fade-in-up delay-200">
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

      {/* Our Causes Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-wide text-gray-800">
              OUR <span className="text-[#00a651]">CAUSES</span>
            </h2>
            <div className="flex justify-center items-center mt-4 mb-4">
              <img src="/img/title-bottom.png" alt="" className="w-auto h-auto" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              our charity paves a way for the underprivileged to dream and hope for a better future
            </p>
          </div>

          {/* Causes Slider (Fade Effect) */}
          <div className="relative grid min-h-[500px]">
            {causeGroups.map((group, index) => (
              <div
                key={index}
                className={`col-start-1 row-start-1 grid grid-cols-1 md:grid-cols-3 gap-6 transition-opacity duration-1000 ease-in-out ${index === causeGroupIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
              >
                {group.map((num, i) => (
                  <div key={`${index}-${i}`} className="bg-[#f9f9f9] border border-gray-200 rounded-sm flex flex-col h-full">
                    <img
                      src={`/img/couses-${num}.jpg`}
                      alt={`Cause ${num}`}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-8 flex-grow flex flex-col text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {num === 1 ? 'Emergency relief'
                          : num === 2 ? 'Holistic Care for Children'
                            : num === 3 ? 'Health & nutrition Causes'
                              : num === 4 ? 'Livelihood & capacity building'
                                : num === 5 ? 'Women Empowerment'
                                  : num === 6 ? 'Skill & entrepreneurship development'
                                    : num === 7 ? 'Environment & Sustainability'
                                      : 'Water, Sanitation & Hygiene'}
                      </h3>
                      <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">
                        {num === 1
                          ? "We aim at 'no poverty' and 'zero hunger', aligning with SDGs 1 & 2. We provide basic food, clothing, and necessary items for the sustenance of vulnerable people."
                          : num === 2
                            ? "Imbibed with SDG 4 on 'quality education', SCT focuses on children's education with utmost priority, shaping their future."
                            : num === 3
                              ? "Focusing on SDG 3, 'good health and well-being', the Trust has the target to work on health intervention aspects."
                              : num === 4
                                ? "Driven by SDG 10 on 'reduced inequalities', we are planning to work on livelihood and capacity building for vulnerable communities."
                                : num === 5
                                  ? "In all its associations and institutions, SCT provides equal rights and opportunities for girl children and women."
                                  : num === 6
                                    ? "We empower youths by imparting vital vocational skills and entrepreneurship training to foster self-reliance and economic growth."
                                    : num === 7
                                      ? "Committed to a greener future, we champion environmental protection, sustainable practices, and community awareness."
                                      : "Ensuring access to clean water and promoting safe hygiene practices to improve the overall health of rural and urban communities."}
                      </p>
                      <div className="text-left mt-auto">
                        <Link to="/donate" className="inline-block border border-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-sm hover:bg-[#00a651] hover:border-[#00a651] hover:text-white transition-colors uppercase text-sm tracking-wide">
                          Donate
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
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
                <img src="/img/couses-5.jpg" alt="Children learning" className="relative z-10 rounded-3xl shadow-xl w-full object-cover h-[400px]" />
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
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-4xl font-serif text-odisha-navy mb-4">
              Urgent Causes Need Your Help
            </h2>
            <img src="/img/title-bottom.png" alt="" className="w-auto h-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cause 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="relative h-56 overflow-hidden">
                <img src="/img/couses-1.jpg" alt="Cause" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
                <img src="/img/couses-2.jpg" alt="Cause" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
                <img src="/img/couses-3.jpg" alt="Cause" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
      <section className="relative py-50 bg-odisha-navy overflow-hidden">
        <div className="absolute inset-0 z-2">
          <img src="/img/footer-above.jpg" alt="Volunteers" className="w-full h-full object-cover opacity-20" />
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
