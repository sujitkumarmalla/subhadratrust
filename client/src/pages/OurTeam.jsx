import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
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
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 text-center group">
              <div className="h-72 overflow-hidden relative">
                {/* Professional Team Member Image */}
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" alt="Dr. Prakash Chandra" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-odisha-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-odisha-navy flex items-center justify-center hover:bg-odisha-secondary transition-colors"><FaLinkedin /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-odisha-navy flex items-center justify-center hover:bg-odisha-secondary transition-colors"><FaEnvelope /></a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-odisha-navy font-bold">Dr. Prakash Chandra</h3>
                <p className="text-odisha-secondary text-sm font-semibold uppercase tracking-wider mb-3">Founder & Chairman</p>
                <p className="text-gray-600 text-sm">Dedicated his life to ensuring every child in rural Odisha has access to quality education.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 text-center group">
              <div className="h-72 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" alt="Sunita Mohanty" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-odisha-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-odisha-navy flex items-center justify-center hover:bg-odisha-secondary transition-colors"><FaLinkedin /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-odisha-navy flex items-center justify-center hover:bg-odisha-secondary transition-colors"><FaEnvelope /></a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-odisha-navy font-bold">Sunita Mohanty</h3>
                <p className="text-odisha-secondary text-sm font-semibold uppercase tracking-wider mb-3">Director of Education</p>
                <p className="text-gray-600 text-sm">Spearheads curriculum development for Vidwan Classes and Cohen International School.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 text-center group">
              <div className="h-72 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" alt="Ravi Kumar" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-odisha-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-odisha-navy flex items-center justify-center hover:bg-odisha-secondary transition-colors"><FaLinkedin /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-odisha-navy flex items-center justify-center hover:bg-odisha-secondary transition-colors"><FaEnvelope /></a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-odisha-navy font-bold">Ravi Kumar</h3>
                <p className="text-odisha-secondary text-sm font-semibold uppercase tracking-wider mb-3">Operations Head</p>
                <p className="text-gray-600 text-sm">Ensures that our charitable programs and daily operations run smoothly across all districts.</p>
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
