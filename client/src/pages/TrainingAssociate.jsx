import { FaChalkboardTeacher } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const TrainingAssociate = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Training Associate"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Our Wings' }, { label: 'Training Associate' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      {/* Main Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Text Side */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-odisha-secondary font-bold tracking-widest uppercase text-sm mb-4">
                <FaChalkboardTeacher />
                <span>Professional Excellence</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Our Training Associate
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src="/img/primary(3).jpg" 
                  alt="Training Associate" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Training Associate</h3>
                  <p className="text-white/80 text-sm">Dedicated to continuous learning and professional development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingAssociate;
