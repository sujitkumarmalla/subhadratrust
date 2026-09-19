import { FaTint } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const WaterSanitation = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="WASH Programs"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Quick Links' }, { label: 'WASH' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-odisha-secondary font-bold tracking-widest uppercase text-sm mb-4">
                <FaTint />
                <span>Health & Hygiene</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Water, Sanitation & Hygiene (WASH)
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Access to clean drinking water and proper sanitation facilities is a fundamental human right, yet many rural areas remain deprived. Our WASH initiatives focus on installing tube wells, repairing water infrastructure, and building community toilets to ensure hygiene and prevent waterborne diseases.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                Beyond infrastructure, we conduct extensive behavioral change campaigns in villages and schools to promote handwashing, menstrual hygiene management, and safe sanitation practices. A healthy community begins with basic hygiene.
              </p>
            </div>
            <div className="md:w-1/2 w-full sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/poor_child_8.jpg" 
                  alt="Water and Sanitation" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Clean Water, Safe Lives</h3>
                  <p className="text-white/80 text-sm">Ensuring essential hygiene for all.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterSanitation;
