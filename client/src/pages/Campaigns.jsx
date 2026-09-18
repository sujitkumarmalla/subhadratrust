import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Educate a Child for a Year',
      image: '/img/rural_school.jpg',
      description: 'Provide tuition, books, and uniforms to a child in need.',
      goal: 500000,
      raised: 320000,
    },
    {
      id: 2,
      title: 'Winter Blanket Drive',
      image: '/img/poor_child.jpg',
      description: 'Help us distribute warm blankets to homeless families this winter.',
      goal: 200000,
      raised: 150000,
    },
    {
      id: 3,
      title: 'Nutritious Meals Program',
      image: '/img/poor_child_7.jpg', // Reusing placeholder, ideally change
      description: 'Ensure that no child goes to school hungry by supporting our mid-day meal initiative.',
      goal: 300000,
      raised: 80000,
    }
  ];

  return (
    <div className="bg-smooth min-h-screen flex flex-col">
      <PageBanner 
        title="Active Campaigns"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Campaigns' }]}
      />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((camp) => {
              const progress = Math.min((camp.raised / camp.goal) * 100, 100);
              return (
                <div key={camp.id} className="glass rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300">
                  <img src={camp.image} alt={camp.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-odisha-navy mb-2">{camp.title}</h3>
                    <p className="text-gray-600 text-sm mb-6">{camp.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1 font-semibold text-gray-700">
                        <span>₹{camp.raised.toLocaleString()} Raised</span>
                        <span>Goal: ₹{camp.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-odisha-secondary h-2.5 rounded-full" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <Link to="/donate" className="block w-full text-center bg-odisha-primary hover:bg-odisha-primary-light text-white py-2 rounded-lg font-bold transition-colors">
                      Donate to this Cause
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campaigns;
