import { FaHandshake } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const OurSponsor = () => {
  return (
    <div className="bg-smooth min-h-screen flex flex-col">
      <PageBanner 
        title="Our Sponsors & Partners"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Sponsors & Partners' }]}
        backPath="/about"
        backText="BACK TO ABOUT"
      />

      {/* Content Section */}
      <section className="py-20 px-4 flex-grow">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-odisha-secondary text-white mb-6 shadow-lg">
              <FaHandshake className="text-3xl" />
            </div>
            <h2 className="text-3xl font-serif text-odisha-navy relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-16 after:bg-odisha-primary after:rounded-full">
              Together We Can Do More
            </h2>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We extend our deepest gratitude to our generous sponsors, corporate partners, and well-wishers who make our mission a reality. Your support empowers thousands of children.
            </p>
          </div>

          {/* Sponsors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center h-32 hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xl">Sponsor 1</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center h-32 hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xl">Sponsor 2</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center h-32 hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xl">Sponsor 3</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center h-32 hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xl">Sponsor 4</span>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Interested in partnering with us to transform lives through education?</p>
            <a href="mailto:subhadratrust@gmail.com" className="inline-block bg-odisha-primary hover:bg-odisha-primary-light text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-odisha-primary/30 transition-transform hover:-translate-y-1">
              Become a Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurSponsor;
