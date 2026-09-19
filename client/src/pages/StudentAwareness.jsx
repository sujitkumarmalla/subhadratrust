import { FaBullhorn } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const StudentAwareness = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Student Awareness"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Quick Links' }, { label: 'Student Awareness' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-odisha-secondary font-bold tracking-widest uppercase text-sm mb-4">
                <FaBullhorn />
                <span>Empowering the Youth</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Student Awareness Program
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Awareness is the first step toward change. Our Student Awareness Programs are designed to educate and sensitize school and college students on critical social, environmental, and health issues. We believe that an informed student body is a powerful catalyst for community transformation.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                Through interactive workshops, seminars, and campaigns, we cover topics such as climate change, cyber safety, career counseling, child rights, and mental health. These programs equip students with the knowledge and confidence to make informed decisions and become responsible, proactive citizens.
              </p>
            </div>
            <div className="md:w-1/2 w-full sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:-rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/couses-2.jpg" 
                  alt="Student Awareness" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Igniting Young Minds</h3>
                  <p className="text-white/80 text-sm">Fostering knowledge, responsibility, and awareness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentAwareness;
