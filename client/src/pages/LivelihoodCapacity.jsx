import { FaSeedling } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const LivelihoodCapacity = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Livelihood & Capacity Building"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'What We Do' }, { label: 'Livelihood & Capacity Building' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      {/* Main Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Text Side */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-odisha-secondary font-bold tracking-widest uppercase text-sm mb-4">
                <FaSeedling />
                <span>Empowering Communities</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Livelihood & Capacity Building
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Driven by SDG 10 on 'reduced inequalities', SCT is planning to work on livelihood and capacity building for vulnerable communities. Local resource utilization and indigenous trade promotions are to be encouraged for better income opportunities. Self Help Group (SHG) formation is to be done towards a community collective effort and sustainability. Initial supports are to be provided as 'seed money' and as required 'micro-credit' facilities are to be rendered for the business setup as well as for the growth. The women and young people from communities are to be engaged in such income-generating activities and this can create a bundle of opportunities for the enhancement of the family income. Especially, the tribal and underdeveloped communities will be targeted towards interventions as mostly they deserve the support system.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                Not only these provisions are to be made but also lots of hand-holding support is to be provided through capacity-building training programs from time to time as per the need of the concerned stakeholders. May it be trade selection, business training, book maintenance, SHG functioning, internal lending, bank transactions, team building, internal conflict resolution, etc. SCT aims to provide hand-holding support through training provided by its internal and external resource persons.
              </p>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2 w-full sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/couses-8.jpg" 
                  alt="Livelihood and Capacity Building" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Skill & Enterprise</h3>
                  <p className="text-white/80 text-sm">Fostering sustainable livelihoods and self-reliance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LivelihoodCapacity;
