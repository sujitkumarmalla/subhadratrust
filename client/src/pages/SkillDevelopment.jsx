import { FaTools } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const SkillDevelopment = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Skill & Entrepreneurship"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'What We Do' }, { label: 'Skill & Entrepreneurship' }]}
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
                <FaTools />
                <span>Decent Work & Economic Growth</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Skill & Entrepreneurship Development
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                The employment situation in the state as well as in the nation needs urgent attention as many of the youths are aimless and lack skills for employment. A skilled worker has a better chance to get employment and good employment can only provide good income ultimately supporting the economy of the nation. Considering the need felt with the situation in Odisha as well as the SDG 8 on 'decent work & economic growth', SCT is planning to work towards providing skill training for the youths. National Education Policy (NEP) emphasizes this aspect as well and SCT being an umbrella body for some of the educational institutions, i.e. Vidwan Classes and CIS already has started working on this. All of the SCT's associations help children and youth to develop age-appropriate skills. "Excellence through harmony" is the motto of CIS, the adolescents are mentored and guided to develop some of the skills. SCT is looking forward to having partnerships with other organizations and institutions to scale up the youth skill training provisions.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                Self-employment is an effective platform where a youth or a person not only gets employed but also helps others to get employed. In order to make this possible, SCT is planning to provide training and needed support for the youth, women and other stakeholders as appropriate. The traditional trades and livelihood options both farming and non-farming are also given importance. Along with an initial amount of financial support, various need-based training is to be provided time to time. Follow up and monitoring is to be done regularly to make the initiative successful.
              </p>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2 w-full sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:-rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/couses-4.jpg" 
                  alt="Skill & Entrepreneurship Development" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Empowering Youth</h3>
                  <p className="text-white/80 text-sm">Building skills and fostering self-employment opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillDevelopment;
