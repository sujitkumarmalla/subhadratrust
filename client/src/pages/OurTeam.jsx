import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const OurTeam = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner
        title="Our Team"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Our Team' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl font-serif text-odisha-navy mb-4">
              The Faces Behind the Mission
            </h2>
            <img src="/img/title-bottom.png" alt="" className="w-auto h-auto" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated educators, visionaries, and social workers who strive every day to bring education and holistic development to the children of Odisha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 text-center group flex flex-col">
              <div className="h-72 overflow-hidden relative">
                {/* Professional Team Member Image */}
                <img src="/img/founder.jpg" alt="Jyoti Ranjan Tripathy" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-odisha-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">

                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif text-odisha-navy font-bold">Jyoti Ranjan Tripathy</h3>
                <p className="text-odisha-secondary text-sm font-semibold uppercase tracking-wider mb-3">Founder & Chairman</p>
                <p className="text-gray-600 text-sm mt-auto">Founder of Vidwan Classes and Chairman of Cohen International School. A passionate educator and avid philanthropist.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 text-center group flex flex-col">
              <div className="h-72 overflow-hidden relative">
                <img src="/img/vicechairmain.jpg" alt="Vikas Bahinipati" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-odisha-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">

                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif text-odisha-navy font-bold">Vikas Bahinipati</h3>
                <p className="text-odisha-secondary text-sm font-semibold uppercase tracking-wider mb-3">Vice Chairman</p>
                <p className="text-gray-600 text-sm mt-auto">Educationist and leader with over 18 years of corporate experience, dedicated to developing the educational sector.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 text-center group flex flex-col">
              <div className="h-72 overflow-hidden relative">
                <img src="/img/pogramdirector.jpg" alt="Minakshi Tripathy" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-odisha-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">

                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif text-odisha-navy font-bold">Minakshi Tripathy</h3>
                <p className="text-odisha-secondary text-sm font-semibold uppercase tracking-wider mb-3">Programme Director</p>
                <p className="text-gray-600 text-sm mt-auto">Accomplished development professional with 24+ years of leadership in livelihoods, health, nutrition, and education.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children Image Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-odisha-navy rounded-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-serif text-white mb-6">Our Inspiration</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                The smiles on these faces are what drive our team every single day. Subhadra Charitable Trust was built on the foundation of hope and the unwavering belief that every child deserves a chance to shine brightly.
              </p>
            </div>
            <div className="md:w-1/2 relative min-h-[450px]">
              <img src="/img/poor_child_3.jpg" alt="Smiling Children" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
