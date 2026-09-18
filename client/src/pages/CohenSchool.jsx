import { FaCheckCircle, FaPalette } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const CohenSchool = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Cohen International School"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Our Wings' }, { label: 'Cohen School' }]}
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
                <FaPalette />
                <span>Nurturing Creativity</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Holistic Education at Cohen International School
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Cohen International School, a proud wing of Subhadra Charitable Trust, is dedicated to providing world-class education that goes beyond academics. We believe in nurturing the whole child—academically, socially, and emotionally.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our curriculum is designed to foster creativity, critical thinking, and a lifelong love for learning. From rigorous academic programs to enriching extracurricular activities like our famous Art & Craft workshops, we ensure every student finds their passion and potential.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FaCheckCircle className="text-odisha-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-semibold">State-of-the-art facilities and classrooms</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-odisha-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-semibold">Focus on Arts, Crafts, and holistic growth</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-odisha-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-semibold">Highly qualified and passionate educators</span>
                </li>
              </ul>
              <div>
                <a href="https://www.coheninternationalschool.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-odisha-primary hover:bg-odisha-primary-light text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-odisha-primary/30 transition-transform hover:-translate-y-1">
                  Visit School Website
                </a>
              </div>
            </div>

            {/* Image Side - Art Workshop */}
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                {/* The user-provided image of the Art N Craft Workshop */}
                <img 
                  src="/img/poor_child_6.jpg" 
                  alt="Cohen International School Art N Craft Workshop" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Art N Craft Workshop</h3>
                  <p className="text-white/80 text-sm">Day 2 of our creative immersion program</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="italic text-gray-500 text-sm">Students participating in our expansive Art & Craft Workshop sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CohenSchool;
