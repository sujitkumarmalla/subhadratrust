import { FaChild } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const HolisticCare = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Holistic Care for Children"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'What We Do' }, { label: 'Holistic Care' }]}
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
                <FaChild />
                <span>Nurturing the Future</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Holistic Care for Children
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Imbibed with SDG 4 on 'quality education', SCT focuses on children's education with utmost priority. In this regard, aiming for interventions SCT has a goal of opening, promoting, establishing, setting up, and running schools, colleges, and other educational establishments for the advancement of education relating to arts, science, literature, technical, medical, management, vocational, or musical courses. In addition, it aims to set up boarding houses, libraries, reading rooms, gymnasiums, and other training, skill development, and vocational centers. It has a goal to promote, advance, and encourage or aid in helping, promoting, and advancing primary, secondary, and higher education including medical, physical training, fine arts, crafts, and other welfare centers for the student. Vidwan Classes, Cohen International School, etc. are the brainchild towards achieving this goal. While establishing institutes, SCT aims to provide skilled, technical, and scientific education to enable the younger generation to develop self-confidence and skills to compete and succeed in the national and international fields. Aerospace engineering, Artificial intelligence, Coding, Vedic Maths, etc. are some of the innovative and unique initiatives of CIS in Odisha.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                However, the intervention is not limited to only education as SCT aims for the 'holistic care for the children'. Along with this, child rights, protections, and overall development of the child is the ultimate goal. Looking into the vulnerable situation of children from underprivileged families, SCT is planning to support them with student scholarships, and stipends, and render other kinds of support and aid to students including supply of books, medals, and titles without any distinction of caste, creed, race, region or gender. In its extracurricular activities, SCT has the target to promote sports, music, drama, arts, and cultures. To promote education among all in society, various publishing initiatives are to be undertaken for books, periodicals, journals, magazines, and other educational materials. Apart from the above, the Trust has plans for scholarships and financial assistance to deserving and needy students for elementary and higher education too. SCT looks forward to supporting talented and brilliant students from underprivileged families, children having no parents, and incapacitated parents through residential quality education in CIS. The school education is provided up to 12th standard with integrated coaching facilities. With good care and parental and mentoring support, the children are grown in a homely environment for a better future.
              </p>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2 w-full sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/primary(7).jpg" 
                  alt="Holistic Care for Children" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Comprehensive Development</h3>
                  <p className="text-white/80 text-sm">Empowering children through education, care, and support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HolisticCare;
