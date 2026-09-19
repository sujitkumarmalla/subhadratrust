import { FaHandshake } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import { Link } from 'react-router-dom';

const sponsors = [
  {
    name: 'Briskode Technology',
    description: 'Briskode Technology is a key strategic partner, empowering our initiatives through digital innovation and robust technological support. Their commitment to excellence helps us expand our reach and impact more lives effectively.',
    logo: '/img/briskode.jpg',
    fallbackLogo: 'B',
    website: 'https://briskode.com',
    colorClasses: 'bg-blue-50 border-blue-100 text-blue-900',
    btnClasses: 'border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white',
    dividerClass: 'bg-blue-300'
  },
  {
    name: 'Tech Mahindra',
    description: 'Tech Mahindra supports our educational and social outreach programs. Through their generous funding and expertise, we are able to bridge the digital divide for underprivileged children in rural Odisha.',
    logo: '/img/images.png',
    fallbackLogo: 'TM',
    website: 'https://www.techmahindra.com',
    colorClasses: 'bg-rose-50 border-rose-100 text-rose-900',
    btnClasses: 'border-rose-500 text-rose-600 hover:bg-rose-600 hover:text-white',
    dividerClass: 'bg-rose-300'
  },
  {
    name: 'Tata Consultancy Services',
    description: 'TCS is a prominent supporter of our skill development initiatives. Their contributions empower the youth with modern technological skills, paving the way for a brighter and more secure future.',
    logo: '/img/tech.png',
    fallbackLogo: 'TCS',
    website: 'https://www.tcs.com',
    colorClasses: 'bg-indigo-50 border-indigo-100 text-indigo-900',
    btnClasses: 'border-indigo-500 text-indigo-600 hover:bg-indigo-600 hover:text-white',
    dividerClass: 'bg-indigo-300'
  }
];

const OurSponsor = () => {
  return (
    <div className="bg-smooth min-h-screen flex flex-col">
      <PageBanner
        title="Our Sponsors & Partners"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Sponsors & Partners' }]}
      />

      {/* Content Section */}
      <section className="py-20 px-4 flex-grow">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-odisha-secondary text-white mb-6 shadow-lg">
              <FaHandshake className="text-3xl" />
            </div>
            <h2 className="text-3xl font-serif text-odisha-navy mb-4">
              Together We Can Do More
            </h2>
            <img src="/img/title-bottom.png" alt="" className="w-auto h-auto mx-auto" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We extend our deepest gratitude to our generous sponsors, corporate partners, and well-wishers who make our mission a reality. Your support empowers thousands of children.
            </p>
          </div>

          {/* Sponsors Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className={`flex flex-col items-center rounded-2xl p-6 shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center group ${sponsor.colorClasses}`}
              >
                <div className="w-full h-16 flex items-center justify-center mb-4 bg-white/60 rounded-xl p-2">
                  {/* Using an img tag with a fallback handler for logos */}
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-2xl font-black uppercase tracking-widest opacity-40">
                    {sponsor.fallbackLogo}
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 w-full mt-1">
                  <h3 className="text-lg font-bold tracking-tight mb-2 line-clamp-1">
                    {sponsor.name}
                  </h3>
                  <div className={`w-8 h-1 mx-auto mb-3 rounded-full opacity-60 ${sponsor.dividerClass}`}></div>
                  
                  <p className="text-[13px] leading-relaxed opacity-80 text-center px-1 mb-4 flex-grow line-clamp-3">
                    {sponsor.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <div className="mt-auto flex justify-center">
                    <a 
                      href={sponsor.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-xs font-bold border px-5 py-1.5 rounded-full transition-colors duration-300 ${sponsor.btnClasses}`}
                    >
                      Learn More
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-odisha-navy rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-serif text-white mb-6">Partner With Us</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">Interested in partnering with us to transform lives through education? Let's join hands to make a difference in rural Odisha.</p>
              <Link to="/contact-us" className="inline-block bg-white hover:bg-gray-100 text-odisha-navy font-bold py-4 px-10 rounded-full shadow-xl shadow-white/10 transition-transform hover:-translate-y-1">
                Become a Partner
              </Link>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-odisha-primary opacity-20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurSponsor;
