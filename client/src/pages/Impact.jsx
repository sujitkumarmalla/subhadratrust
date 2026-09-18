import { FaQuoteLeft, FaHandHoldingHeart, FaGraduationCap, FaMedkit } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const Impact = () => {
  return (
    <div className="bg-smooth min-h-screen flex flex-col">
      <PageBanner 
        title="Our Impact"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Impact Stories' }]}
      />

      {/* Stats Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-odisha-navy relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-16 after:bg-odisha-primary after:rounded-full">
              Numbers That Matter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass p-8 rounded-2xl text-center animate-fade-in-up">
              <div className="w-16 h-16 mx-auto bg-odisha-secondary/20 rounded-full flex items-center justify-center mb-4">
                <FaGraduationCap className="text-3xl text-odisha-secondary" />
              </div>
              <h3 className="text-5xl font-bold text-odisha-navy mb-2">5,000+</h3>
              <p className="text-gray-600 font-semibold">Students Educated</p>
            </div>
            <div className="glass p-8 rounded-2xl text-center animate-fade-in-up delay-100">
              <div className="w-16 h-16 mx-auto bg-odisha-primary/20 rounded-full flex items-center justify-center mb-4">
                <FaHandHoldingHeart className="text-3xl text-odisha-primary" />
              </div>
              <h3 className="text-5xl font-bold text-odisha-navy mb-2">10,000+</h3>
              <p className="text-gray-600 font-semibold">Meals Served</p>
            </div>
            <div className="glass p-8 rounded-2xl text-center animate-fade-in-up delay-200">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                <FaMedkit className="text-3xl text-red-500" />
              </div>
              <h3 className="text-5xl font-bold text-odisha-navy mb-2">50+</h3>
              <p className="text-gray-600 font-semibold">Health Camps Organized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-odisha-navy relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-16 after:bg-odisha-primary after:rounded-full">
              Stories of Hope
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Story 1 */}
            <div className="glass p-8 rounded-3xl relative">
              <FaQuoteLeft className="absolute top-6 left-6 text-4xl text-gray-200 -z-10" />
              <p className="text-gray-700 italic mb-6 text-lg relative z-10">
                "Before the trust intervened, going to school felt like an impossible dream. Now, not only am I learning, but I also have the confidence to pursue engineering. My family and I are forever grateful."
              </p>
              <div className="flex items-center space-x-4">
                <img src="/img/poor_child_6.jpg" alt="Student" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-odisha-navy">Anjali Mishra</h4>
                  <p className="text-sm text-gray-500">Student, Cohen International School</p>
                </div>
              </div>
            </div>
            {/* Story 2 */}
            <div className="glass p-8 rounded-3xl relative">
              <FaQuoteLeft className="absolute top-6 left-6 text-4xl text-gray-200 -z-10" />
              <p className="text-gray-700 italic mb-6 text-lg relative z-10">
                "The health camps organized by Subhadra Charitable Trust provided critical care to our village. Many elderly people received treatments they could never afford otherwise. They are doing god's work."
              </p>
              <div className="flex items-center space-x-4">
                <img src="/img/poor_child_2.jpg" alt="Villager" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-odisha-navy">Ramesh Das</h4>
                  <p className="text-sm text-gray-500">Village Elder, Khordha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
