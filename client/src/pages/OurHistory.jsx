import { FaLandmark, FaGraduationCap, FaHandsHelping } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const OurHistory = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner
        title="Our History"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Our History' }]}
        backPath="/about"
        backText="BACK TO ABOUT"
      />

      {/* History Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl font-serif text-odisha-navy mb-4">
              Our Journey of Impact
            </h2>
            <img src="/img/title-bottom.png" alt="" className="w-auto h-auto" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              From a small initiative to a widespread educational movement, trace the timeline of Subhadra Charitable Trust's dedication to Odisha's youth.
            </p>
          </div>

          <div className="space-y-16">
            {/* Timeline Item 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="md:w-1/3">
                <img src="/img/couses-8.jpg" alt="Foundation" className="w-full h-64 object-cover rounded-xl shadow-md" />
              </div>
              <div className="md:w-2/3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-odisha-primary text-white mb-4 shadow-lg">
                  <FaLandmark className="text-xl" />
                </div>
                <h3 className="text-2xl font-serif text-odisha-navy mb-2">The Inception</h3>
                <h4 className="text-odisha-secondary font-bold tracking-widest text-sm uppercase mb-4">2010</h4>
                <p className="text-gray-700 leading-relaxed">
                  Subhadra Charitable Trust was officially registered. A small group of enthusiastic educators came together with a shared vision to eradicate educational inequality in rural Odisha. Our first small learning center was established, laying the foundation for what was to come.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="md:w-1/3">
                <img src="/img/couses-6.jpg" alt="Education Growth" className="w-full h-64 object-cover rounded-xl shadow-md" />
              </div>
              <div className="md:w-2/3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-odisha-secondary text-white mb-4 shadow-lg">
                  <FaGraduationCap className="text-xl" />
                </div>
                <h3 className="text-2xl font-serif text-odisha-navy mb-2">Launching Vidwan Classes</h3>
                <h4 className="text-odisha-primary font-bold tracking-widest text-sm uppercase mb-4">2015</h4>
                <p className="text-gray-700 leading-relaxed">
                  Realizing the immense need for competitive exam preparation, we launched Vidwan Classes. This initiative provided top-tier coaching for engineering and medical aspirants who otherwise could not afford it, resulting in unprecedented success rates for underprivileged students.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="md:w-1/3">
                <img src="/img/scen.jpg" alt="Community Outreach" className="w-full h-64 object-cover rounded-xl shadow-md" />
              </div>
              <div className="md:w-2/3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-odisha-tertiary text-white mb-4 shadow-lg">
                  <FaHandsHelping className="text-xl" />
                </div>
                <h3 className="text-2xl font-serif text-odisha-navy mb-2">Expanding the Wings</h3>
                <h4 className="text-odisha-secondary font-bold tracking-widest text-sm uppercase mb-4">2020 - Present</h4>
                <p className="text-gray-700 leading-relaxed">
                  The Trust expanded its reach by establishing Cohen International School and the Science Movement. We introduced Publication Associates to distribute free study materials. Today, we impact thousands of young minds, striving for holistic development across the state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurHistory;
