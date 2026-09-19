import { FaGraduationCap } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const VidwanClasses = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Vidwan Classes"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Our Wings' }, { label: 'Vidwan Classes' }]}
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
                <FaGraduationCap />
                <span>Premier Coaching Institute</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Vidwan Classes Pvt. Ltd.
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Vidwan Classes Pvt. Ltd. is the knowledge associate of Subhadra Charitable Trust and is one of the best coaching institutes of Odisha & Eastern India for IIT/JEE, NEET/Medical, KVPY, NTSE and all National & International level Olympiads. Vidwan Classes takes pride in being the only coaching institute from Odisha producing State Rank Toppers (SRT) and All India Rank (AIR) holders in various competitive entrances of India. Vidwan Classes marked the humble beginning of an exciting odyssey in 2007 bearing vision of sculpting the World of education with immortal nerve and commitment to excellence. It was one of the pioneers in Coaching in Odisha for IIT-JEE and achieved phenomenal success consistently over the last one decade. Today it stands as a citadel of learning which is committed to develop the mind and spirit of students and prepare them for the toughest challenges in life. During these years, this has grown into one of the leading institutions providing quality education to the students which is facilitated by trained, dedicated educators who are student centric.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                The institute’s teaching methodology is concept driven and prepares students for school examinations as well as for entrances, without making a trade-off between the two. ‘Vidwan Classes’ provides updated study materials, conduct regular tests, doubt clearing sessions and self-study hours. Among all other factors, the teachers are readily accessible to students as well as to parents to provide needed support and resolving issues promptly. Perseverance and striving for progress have been the corner-stones of the journey and proudly ‘Vidwan Classes’ claim to be one of the most sought-after brands in the coaching industry of Odisha. Through this institute, SCT looks for helping underprivileged meritorious students through providing subsidized or free coaching classes.
              </p>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/cohen (1).jpg" 
                  alt="Vidwan Classes" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Vidwan Classes</h3>
                  <p className="text-white/80 text-sm">Sculpting the world of education with commitment to excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VidwanClasses;
