import { FaTrophy } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const OurMegaSuccesses = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Our Mega Successes"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Quick Links' }, { label: 'Mega Successes' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-odisha-secondary font-bold tracking-widest uppercase text-sm mb-4">
                <FaTrophy />
                <span>Celebrating Milestones</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Our Mega Successes
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Over the years, Subhadra Charitable Trust has spearheaded numerous large-scale initiatives that have left an indelible mark on the communities we serve. From conducting state-wide science camps for thousands of underprivileged students to organizing massive health and relief drives during crises, our mega successes are a testament to our unwavering dedication and the incredible support of our partners.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                Our flagship programs, including the establishment of Cohen International School and our wide-reaching livelihood skill development workshops, have transformed countless lives, proving that with collective effort and compassion, monumental change is achievable.
              </p>
            </div>
            <div className="md:w-1/2 w-full sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/scen.jpg" 
                  alt="Mega Successes" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Monumental Impact</h3>
                  <p className="text-white/80 text-sm">Transforming society through large-scale initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMegaSuccesses;
