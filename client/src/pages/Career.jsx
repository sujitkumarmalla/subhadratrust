import { FaBriefcase, FaArrowRight } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const Career = () => {
  const jobOpenings = [
    {
      title: 'Program Coordinator',
      location: 'Bhubaneswar, Odisha',
      type: 'Full-time',
      description: 'Lead and manage our grassroots educational programs. Must have 5+ years of experience in the NGO sector.'
    },
    {
      title: 'Field Officer (Livelihood)',
      location: 'Khurda District',
      type: 'Full-time',
      description: 'Work directly with communities to facilitate SHG formation and micro-credit training programs.'
    },
    {
      title: 'Communications & PR Manager',
      location: 'Bhubaneswar, Odisha',
      type: 'Part-time / Remote',
      description: 'Manage our digital presence, newsletters, and stakeholder communications.'
    }
  ];

  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Career Opportunities"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }, { label: 'Career' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      {/* Main Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-2 text-odisha-secondary font-bold tracking-widest uppercase text-sm mb-4">
              <FaBriefcase />
              <span>Join Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
              Work With Us
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              At Subhadra Charitable Trust, we are always looking for passionate, driven individuals who want to make a real difference in society. Join our team and help us empower the underprivileged through education, health, and livelihood programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4">
                  <span className="bg-odisha-secondary/10 text-odisha-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-odisha-navy mb-2">{job.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{job.location}</p>
                <p className="text-gray-600 mb-6 flex-grow">{job.description}</p>
                <button className="inline-flex items-center text-odisha-primary font-bold hover:text-odisha-navy transition-colors mt-auto">
                  Apply Now <FaArrowRight className="ml-2 text-sm" />
                </button>
              </div>
            ))}
          </div>

          {/* Spontaneous Application */}
          <div className="mt-20 bg-odisha-navy text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 opacity-10">
              <FaBriefcase size={200} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Don't see a perfect fit?</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                We are continually growing. Send us your resume and a cover letter explaining how you can contribute to our mission, and we will keep you in mind for future roles.
              </p>
              <a href="mailto:subhadratrust@gmail.com" className="inline-block bg-odisha-secondary hover:bg-[#d67b29] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                Submit Spontaneous Application
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
