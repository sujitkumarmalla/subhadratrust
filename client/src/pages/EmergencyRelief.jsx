import { FaAmbulance } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const EmergencyRelief = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Emergency Relief"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Quick Links' }, { label: 'Emergency Relief' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-odisha-secondary font-bold tracking-widest uppercase text-sm mb-4">
                <FaAmbulance />
                <span>Immediate Support</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Emergency Relief Operations
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                During natural disasters and unforeseen crises, immediate action saves lives. Our Emergency Relief teams are trained to mobilize quickly, providing critical aid such as food, clean drinking water, medical supplies, and temporary shelter to affected communities.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                Working in coordination with local authorities and partner organizations, we ensure that the most vulnerable populations receive the support they need to survive and rebuild. From floods and cyclones in Odisha to health emergencies, SCT stands steadfast in its commitment to humanitarian aid.
              </p>
            </div>
            <div className="md:w-1/2 w-full sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/poor_child_4.jpg" 
                  alt="Emergency Relief" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Swift Action, Lasting Hope</h3>
                  <p className="text-white/80 text-sm">Providing critical aid during times of crisis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyRelief;
