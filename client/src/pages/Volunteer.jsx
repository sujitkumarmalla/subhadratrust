import { useState } from 'react';
import { FaHandsHelping, FaCheckCircle } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const Volunteer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-smooth min-h-screen flex flex-col">
      <PageBanner 
        title="Become a Volunteer"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Volunteer' }]}
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="glass rounded-3xl overflow-hidden flex flex-col md:flex-row">
            {/* Info Panel */}
            <div className="md:w-5/12 bg-odisha-primary p-10 text-white flex flex-col justify-center">
              <FaHandsHelping className="text-6xl text-odisha-secondary mb-6" />
              <h2 className="text-3xl font-serif mb-4">Join Our Mission</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Your time and skills are just as valuable as financial contributions. Volunteer with us to directly impact the lives of children and communities across Odisha.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-odisha-secondary"></span>
                  <span>Teach or mentor students</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-odisha-secondary"></span>
                  <span>Organize events and drives</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-odisha-secondary"></span>
                  <span>Assist in health camps</span>
                </li>
              </ul>
            </div>

            {/* Form Panel */}
            <div className="md:w-7/12 p-10 bg-white">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-serif text-odisha-navy mb-6 border-b pb-4">Volunteer Application</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                      <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-odisha-secondary outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                      <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-odisha-secondary outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                    <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-odisha-secondary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Area of Interest</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-odisha-secondary outline-none">
                      <option>Teaching / Mentoring</option>
                      <option>Event Organization</option>
                      <option>Healthcare Support</option>
                      <option>IT & Admin Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Why do you want to volunteer?</label>
                    <textarea rows="3" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-odisha-secondary outline-none resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-odisha-secondary hover:bg-odisha-secondary-dark text-white font-bold py-3 rounded-lg shadow-md transition-colors">
                    Submit Application
                  </button>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center space-y-4 py-10 animate-fade-in-up text-center">
                  <FaCheckCircle className="text-6xl text-green-500 mb-2" />
                  <h3 className="text-2xl font-serif text-odisha-navy">Thank You!</h3>
                  <p className="text-gray-600">Your application has been received. Our team will reach out to you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-4 text-sm text-odisha-primary hover:underline">Submit another application</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
