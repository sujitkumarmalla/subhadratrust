import { FaChalkboardTeacher } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const Opttri = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Teacher's Training & Research"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Our Wings' }, { label: 'OPTTRI' }]}
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
                <FaChalkboardTeacher />
                <span>Empowering Educators</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Odisha Primary Teachers Training & Research Institute
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                The Odisha Primary Teachers Training & Research Institute (OPTTRI), is a unit of Subhadra Charitable Trust (SCT), which promotes qualitative basic education for underprivileged children. OPTTRI understands that Mothers have some basic education to raise healthier families. Likewise, children and youth having basic education, skills, and knowledge are not only able to read, write, and calculate but also get access to a bundle of information and thinking processes which give them more discerned choices to behave appropriately as well as to take apt decisions at individual, family and community levels. 
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Apart from the above, through basic education adults are empowered and liberated to take wise decisions about political and social aspects which create a better impact on society at large. Finally, children from underprivileged families need continuous qualitative education from pre-primary to higher education level to see a breakthrough in those families. As basic education, in general, helps to create awareness, paves a path for progress and ultimately helps people from vulnerable communities to improve their lives, OPTTRI takes all possible efforts in imparting this. Though the proposed education plans of OPTTRI are not designed to directly create economic opportunities which can eliminate poverty, certain elements of the programme, specifically the adult education programme, have potentialities to provide families with tools to face the odds and socioeconomic challenges. This also helps to work against all the social evil practices, i.e drug abuse, gender discrimination, early marriage and all others.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                In this programme, the role of a primary, middle, secondary & higher secondary level teacher is to lay the foundation for the maximum development of children and to provide them with a secure and positive learning environment. As a teacher creates a lot of impacts and makes a lot of difference in the lives of young learners, teachers are considered one of the pivotal instruments in this program. The pre-primary teachers are trained on the focus areas of lesson planning, timetable preparation, and developing educative materials for the children to engage them in playful activities such as making art and craft, drawing, etc. It becomes essential to train the primary, middle, and senior-level teachers to create effective and efficient learning opportunities for the maximum growth and development of the students.
              </p>
            </div>

            {/* Images Side */}
            <div className="md:w-1/2 flex flex-col gap-8">
              {/* First Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/couses-7.jpg" 
                  alt="Teacher's Training Session 1" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">OPTTRI Training Session</h3>
                  <p className="text-white/80 text-sm">Empowering teachers with advanced pedagogy skills.</p>
                </div>
              </div>

              {/* Second Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:-rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/couses-8.jpg" 
                  alt="Teacher's Training Session 2" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Collaborative Learning</h3>
                  <p className="text-white/80 text-sm">Creating effective and efficient learning opportunities.</p>
                </div>
              </div>

              {/* Third Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/couses-5.jpg" 
                  alt="Teacher's Training Session 3" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Interactive Pedagogy</h3>
                  <p className="text-white/80 text-sm">Engaging in playful activities and creative learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Opttri;
