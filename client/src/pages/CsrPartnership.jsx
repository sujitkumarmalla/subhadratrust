import { FaHandshake } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const CsrPartnership = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="CSR Partnerships"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Quick Links' }, { label: 'CSR Partnership' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-odisha-secondary font-bold tracking-widest uppercase text-sm mb-4">
                <FaHandshake />
                <span>Collaborative Impact</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                CSR & Program Partnership
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Meaningful social change requires collaborative effort. Subhadra Charitable Trust invites corporate partners, philanthropists, and other NGOs to join hands in driving impactful CSR initiatives. By partnering with us, you align your corporate social responsibility goals with grassroots execution that delivers transparent, measurable results.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                We offer tailor-made programs across education, health, livelihood, and environmental sustainability. From sponsoring children's education at Cohen International School to funding medical relief camps, your contributions can create a lasting legacy of positive change in marginalized communities.
              </p>
            </div>
            <div className="md:w-1/2 w-full sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:-rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/charity_team.jpg" 
                  alt="CSR Partnership" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Partner with Us</h3>
                  <p className="text-white/80 text-sm">Amplify your impact through strategic collaboration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CsrPartnership;
