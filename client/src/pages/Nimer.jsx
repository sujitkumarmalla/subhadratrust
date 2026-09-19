import { FaCalculator } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const Nimer = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="NIMER"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Our Wings' }, { label: 'NIMER' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      {/* Main Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Text Side */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-odisha-secondary font-bold tracking-widest uppercase text-sm mb-4">
                <FaCalculator />
                <span>Advancing Mathematical Sciences</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                National Institution of Mathematical Education & Research (NIMER)
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                The National Institution of Mathematical Education & Research (NIMER) is a distinguished wing of the Subhadra Charitable Trust dedicated to fostering mathematical excellence and analytical thinking among students. Recognizing mathematics as the universal language of science and logical reasoning, NIMER was established to remove the fear of mathematics and cultivate a deep, enduring passion for the subject.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                NIMER operates on the philosophy that a strong mathematical foundation is essential for success in almost every modern professional field. The institution conducts advanced workshops, mathematical olympiad training programs, and specialized coaching sessions designed to challenge and engage young minds. By focusing on conceptual clarity over rote memorization, NIMER empowers students to tackle complex problems with confidence and creativity.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                Through various grassroots initiatives, NIMER identifies and nurtures mathematically gifted students from underprivileged backgrounds, ensuring that financial constraints do not hinder raw talent. With a team of renowned academicians and mathematical researchers, NIMER continuously strives to elevate the standard of mathematical education across the region, preparing the next generation of innovators and problem solvers.
              </p>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/national.jpg" 
                  alt="NIMER Mathematics Education" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">NIMER</h3>
                  <p className="text-white/80 text-sm">Fostering excellence and analytical thinking in Mathematics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nimer;
