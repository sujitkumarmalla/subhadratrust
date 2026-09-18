import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <div className="bg-smooth min-h-screen flex flex-col">
      <PageBanner 
        title="Contact Us"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact Us' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      <section className="py-20 px-4 flex-grow">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Information */}
            <div className="lg:w-5/12">
              <h2 className="text-3xl font-serif text-odisha-navy mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                We'd love to hear from you. Whether you have a question about our programs, want to volunteer, or wish to make a donation, our team is ready to answer all your questions.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-full bg-odisha-primary/10 flex items-center justify-center text-odisha-primary flex-shrink-0 mr-6">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-odisha-navy mb-2">Our Location</h4>
                    <p className="text-gray-600">Subhadra Charitable Trust Headquarters<br />Bhubaneswar, Odisha, India - 751001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-full bg-odisha-secondary/10 flex items-center justify-center text-odisha-secondary flex-shrink-0 mr-6">
                    <FaPhone className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-odisha-navy mb-2">Phone Number</h4>
                    <p className="text-gray-600">+91-9439112233<br />Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-full bg-odisha-tertiary/10 flex items-center justify-center text-odisha-tertiary flex-shrink-0 mr-6">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-odisha-navy mb-2">Email Address</h4>
                    <p className="text-gray-600">subhadratrust@gmail.com<br />info@subhadracharitabletrust.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-7/12">
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-serif text-odisha-navy mb-8 border-b pb-4">Send Us a Message</h3>
                
                {isSent ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl flex items-center animate-fade-in-up">
                    <FaPaperPlane className="mr-4 text-2xl" />
                    <div>
                      <h4 className="font-bold">Message Sent Successfully!</h4>
                      <p className="text-sm mt-1">Thank you for reaching out. We will get back to you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-odisha-primary focus:border-odisha-primary outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-odisha-primary focus:border-odisha-primary outline-none transition-all" placeholder="john@example.com" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                      <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-odisha-primary focus:border-odisha-primary outline-none transition-all" placeholder="How can I help?" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                      <textarea name="message" required value={formData.message} onChange={handleChange} rows="5" className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-odisha-primary focus:border-odisha-primary outline-none transition-all resize-none" placeholder="Write your message here..."></textarea>
                    </div>

                    <button type="submit" className="bg-odisha-primary hover:bg-odisha-primary-light text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-colors flex items-center">
                      <FaPaperPlane className="mr-3" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
