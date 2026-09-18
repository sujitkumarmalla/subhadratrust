import { FaCheckCircle } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const AboutUs = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="About Us"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      {/* Main About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                {/* Photo representing the charitable trust */}
                <img src="/img/poor_child_8.jpg" alt="Charitable Trust Activity" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-odisha-secondary rounded-full z-0 opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-odisha-primary rounded-full z-0 opacity-20 blur-3xl"></div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif text-odisha-navy relative inline-block pb-4 mb-6 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-odisha-primary after:rounded-full">
                Subhadra Charitable Trust
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Subhadra Charitable Trust (SCT) is a registered entity founded by a group of social and educational enthusiasts of Odisha. With a clear vision to uplift society through quality education, we have been working tirelessly to create opportunities for the underprivileged.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We believe that education is the ultimate equalizer. Through our various wings—such as Cohen International School and Vidwan Classes—we are actively building an ecosystem where every child can dream, learn, and succeed, irrespective of their background.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-odisha-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-semibold">Commitment to Excellence in Education</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-odisha-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-semibold">Holistic Development of Every Child</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-odisha-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-semibold">Fostering Scientific Temperament</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
