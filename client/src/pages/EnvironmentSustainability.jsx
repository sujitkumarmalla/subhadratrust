import { FaLeaf } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const EnvironmentSustainability = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Environment & Tech"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Quick Links' }, { label: 'Sustainability' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-odisha-secondary font-bold tracking-widest uppercase text-sm mb-4">
                <FaLeaf />
                <span>Protecting Our Planet</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Environment, Technology & Sustainability
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                As the effects of climate change become more pronounced, it is imperative to integrate sustainable practices into our daily lives and community frameworks. We focus on afforestation, clean energy adoption, and waste management initiatives aimed at creating a greener, more sustainable future.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                By leveraging modern technology, we are introducing smart agricultural practices to local farmers, implementing eco-friendly solutions in our educational institutions, and running campaigns to reduce plastic usage. Our goal is to ensure that development does not come at the cost of our environment.
              </p>
            </div>
            <div className="md:w-1/2 w-full sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:-rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/banner-3.jpg" 
                  alt="Environment Sustainability" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Green Innovation</h3>
                  <p className="text-white/80 text-sm">Harnessing tech for an eco-friendly tomorrow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentSustainability;
