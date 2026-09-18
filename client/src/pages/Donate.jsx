import { useState } from 'react';
import { FaHeart, FaQrcode, FaCheckCircle, FaArrowLeft, FaShieldAlt, FaGift, FaGraduationCap, FaUtensils } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const Donate = () => {
  const [donationType, setDonationType] = useState('one-time'); // 'one-time' or 'monthly'
  const [selectedTier, setSelectedTier] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [step, setStep] = useState(1); // 1: Amount, 2: Details, 3: QR
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const tiers = [
    { amount: 500, label: 'Feed a Child', icon: <FaUtensils /> },
    { amount: 1000, label: 'School Supplies', icon: <FaGift /> },
    { amount: 5000, label: 'Educate a Child', icon: <FaGraduationCap /> },
  ];

  const handleAmountSelect = (amount) => {
    setSelectedTier(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setSelectedTier(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const currentAmount = customAmount ? customAmount : selectedTier;

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="bg-smooth min-h-screen flex flex-col">
      <PageBanner 
        title="Make a Donation"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Donate' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      <section className="py-20 px-4 flex-grow relative">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="glass rounded-3xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Left Info Panel */}
            <div className="md:w-5/12 bg-odisha-navy p-10 text-white flex flex-col justify-between">
              <div>
                <FaHeart className="text-5xl text-odisha-secondary mb-6 animate-pulse-slow" />
                <h2 className="text-3xl font-serif mb-4">You have the power to change a life.</h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Your donation goes directly toward funding education, healthcare, and vital resources for communities in Odisha.
                </p>
                
                {/* Trust Signals */}
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <h4 className="font-bold mb-4 flex items-center"><FaShieldAlt className="mr-2 text-odisha-secondary" /> Why give to us?</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-3">
                      <FaCheckCircle className="text-odisha-secondary mt-1 shrink-0" />
                      <span><strong>100% Secure</strong> transactions via verified UPI.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <FaCheckCircle className="text-odisha-secondary mt-1 shrink-0" />
                      <span><strong>Tax Deductible</strong> under section 80G of Income Tax Act.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <FaCheckCircle className="text-odisha-secondary mt-1 shrink-0" />
                      <span><strong>Transparency:</strong> Annual reports of funds utilized.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Interactive Form Panel */}
            <div className="md:w-7/12 p-8 md:p-12 bg-white relative">
              
              {/* Step 1: Choose Amount */}
              {step === 1 && (
                <div className="animate-fade-in-up">
                  <h3 className="text-2xl font-serif text-odisha-navy mb-6">Choose Donation Amount</h3>
                  
                  {/* Toggle Type */}
                  <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
                    <button 
                      onClick={() => setDonationType('one-time')}
                      className={`flex-1 py-3 text-sm font-bold rounded-md transition-all ${donationType === 'one-time' ? 'bg-white shadow-md text-odisha-navy' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      Give Once
                    </button>
                    <button 
                      onClick={() => setDonationType('monthly')}
                      className={`flex-1 py-3 text-sm font-bold rounded-md transition-all ${donationType === 'monthly' ? 'bg-white shadow-md text-odisha-navy' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      Monthly <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full ml-1">♥️ Impact</span>
                    </button>
                  </div>

                  {/* Amount Tiers */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {tiers.map((tier) => (
                      <button
                        key={tier.amount}
                        onClick={() => handleAmountSelect(tier.amount)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${selectedTier === tier.amount ? 'border-odisha-secondary bg-green-50 text-odisha-secondary' : 'border-gray-200 hover:border-gray-300'}`}
                      >
                        <div className="text-xl mb-1 flex justify-center">{tier.icon}</div>
                        <div className="font-bold text-lg mb-1">₹{tier.amount.toLocaleString()}</div>
                        <div className="text-xs text-gray-500 font-medium">{tier.label}</div>
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Or enter a custom amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
                      <input 
                        type="number" 
                        value={customAmount}
                        onChange={handleCustomAmount}
                        placeholder="Other amount" 
                        className={`w-full pl-8 pr-4 py-3 border-2 rounded-xl outline-none transition-all ${customAmount ? 'border-odisha-secondary bg-green-50' : 'border-gray-200 focus:border-gray-300'}`}
                      />
                    </div>
                  </div>

                  <button 
                    onClick={() => { if(currentAmount >= 10) setStep(2) }}
                    disabled={!currentAmount || currentAmount < 10}
                    className="w-full bg-odisha-primary hover:bg-odisha-primary-light text-white font-bold py-4 rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
                  >
                    <span>Donate ₹{currentAmount || '0'} {donationType === 'monthly' ? 'Monthly' : ''}</span>
                  </button>
                </div>
              )}

              {/* Step 2: Details Form */}
              {step === 2 && (
                <div className="animate-fade-in-up">
                  <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-odisha-primary mb-6 flex items-center">
                    <FaArrowLeft className="mr-2" /> Back to Amount
                  </button>
                  <h3 className="text-2xl font-serif text-odisha-navy mb-2">Donor Details</h3>
                  <p className="text-sm text-gray-500 mb-6 border-b pb-4">You are donating <strong>₹{currentAmount}</strong> {donationType === 'monthly' ? 'monthly' : 'once'}.</p>
                  
                  <form onSubmit={handleSubmitDetails} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-odisha-secondary outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-odisha-secondary outline-none transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-odisha-secondary outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Address (for 80G receipt) *</label>
                      <textarea name="address" required value={formData.address} onChange={handleChange} rows="2" className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-odisha-secondary outline-none transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-odisha-secondary hover:bg-odisha-secondary-dark text-white font-bold py-4 rounded-xl shadow-lg transition-all mt-4">
                      Proceed to Payment
                    </button>
                  </form>
                </div>
              )}

              {/* Step 3: QR Code */}
              {step === 3 && (
                <div className="text-center h-full flex flex-col items-center justify-center space-y-6 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2 shadow-inner">
                    <FaCheckCircle className="text-5xl text-green-500" />
                  </div>
                  <h3 className="text-2xl font-serif text-odisha-navy">Details Submitted!</h3>
                  <p className="text-gray-600">Please scan the QR code below using any UPI app (GPay, PhonePe, Paytm) to complete your donation of <strong className="text-xl text-odisha-primary">₹{currentAmount}</strong>.</p>
                  
                  <div className="p-4 bg-white border-4 border-odisha-primary rounded-2xl shadow-xl inline-block relative">
                    {donationType === 'monthly' && <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg rotate-12">Monthly setup</div>}
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                      alt="UPI QR Code Scanner" 
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                  
                  <p className="text-sm font-semibold text-gray-500 flex items-center justify-center space-x-2 mt-4">
                    <FaQrcode /> <span>Scan to Pay</span>
                  </p>
                  
                  <button onClick={() => setStep(2)} className="mt-8 text-sm text-gray-400 hover:text-odisha-primary hover:underline flex items-center justify-center">
                    <FaArrowLeft className="mr-2" /> Modify Details
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
