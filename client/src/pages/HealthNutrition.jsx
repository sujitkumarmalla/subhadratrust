import { FaHeartbeat } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const HealthNutrition = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Health & Nutrition"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'What We Do' }, { label: 'Health & Nutrition' }]}
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
                <FaHeartbeat />
                <span>Good Health and Well-Being</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Health & Nutrition Causes
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Focusing on SDG 3, 'good health and well-being', the Trust has the target to work on health intervention aspects. As a part of basic provision - health and nutritional provisions are highly essential for the stakeholders in the communities. To meet those requirements, SCT aims to assist and develop the public health systems working with government and private health institutions, dispensaries, hospitals, maternity homes, child welfare centers, or other similar institutions or centers to provide medical relief and aid. Not only this, but SCT also looks for partnerships with research centers and institutions for promotion of research and education for medical science including surgery.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                Financial assistance is to be provided to the needy and indigent persons to meet the cost of medical treatment or nutritional care. Apart from the direct provisions, many awareness programs are planned to be conducted on health and nutritional care. SCT aims to work towards arranging blood donation camps, free eye camps, medical check-ups, and different health awareness programs on different diseases, i.e. malaria, cancer, leprosy, and other communicable diseases including drug addiction cases. It has a special focus on leprosy and SCT aims to create or promote an environment for leprosy eradication and rehabilitation for those affected with leprosy. The Trust looks for working for the benefit of the physically and mentally challenged persons and to provide the necessary support. The vulnerable children to be taken for educational support in CIS will be provided with good health care and quality food with proper nutritional supplements. Many health check-up camps are to be conducted for the stakeholders in the nearby communities.
              </p>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2 w-full sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:-rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/primary(8).jpg" 
                  alt="Health & Nutrition Medical Relief" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Medical & Nutritional Relief</h3>
                  <p className="text-white/80 text-sm">Ensuring well-being through accessible healthcare and nutrition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthNutrition;
